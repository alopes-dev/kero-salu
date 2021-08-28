import { FindOne, FindAll } from "@controllers/notifications";
import { GraphQLList, GraphQLString } from "graphql";
import { NotificationsType } from "../types";
import { Notifications } from "@models/notifications";
import { Op } from "sequelize";

export const NotificationsQueryResolve = {
  NotificationsList: {
    type: new GraphQLList(NotificationsType),
    async resolve(_, args) {
      return await FindAll();
    },
  },
  NotificationsByOriginOrDistinationId: {
    type: new GraphQLList(NotificationsType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await Notifications.findAll({
        where: {
          [Op.or]: [{ origin: args.id }, { distination: args.id }],
        },
      });
    },
  },
  NotificationsByDistinationOrAll: {
    type: new GraphQLList(NotificationsType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await Notifications.findAll({
        where: {
          [Op.or]: [{ distination: args.id }, { distination: "ALL" }],
        },
      });
    },
  },
  Notifications: {
    type: NotificationsType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
