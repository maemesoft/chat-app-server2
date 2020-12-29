const conn = require("./conn");
const Conversation = require("./models/Conversation");
const Message = require("./models/Message");
const User = require("./models/User");

// 사용자는 많은 대화를 계속할 수 있습니다.
User.hasMany(Conversation);

// 각 대화는 두 명의 사용자에게 속해야합니다.
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });

// 메시지는 단일 대화에 속하지만 대화에는 많은 메시지가 포함됩니다.
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
    conn,
    models: {
        Conversation,
        User,
        Message,
    },
};
