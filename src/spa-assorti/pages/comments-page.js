import React from "react";
import faker from "faker";

import { ApprovalCard } from "../../features/comments/approval-card";
import { Comment } from "../../features/comments/comment";

export const CommentsPage = () => {
  return (
    <>
      Comments here
      <ApprovalCard>
        <Comment
          avatar={faker.image.avatar()}
          author="Sam"
          date="Today 12:00"
          text="LoremIpsum"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={faker.image.avatar()}
          author="John"
          date="Today 12:00"
          text="LoremIpsum2"
        />
      </ApprovalCard>
    </>
  );
};
