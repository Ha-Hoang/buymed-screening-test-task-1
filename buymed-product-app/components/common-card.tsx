import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface CardProps {
  title?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  cardCls?: string;
  cardTitleCls?: string;
  cardHeaderCls?: string;
  cardContentCls?: string;
  cardFooterCls?: string;
}

const CommonCard = ({
  title,
  header,
  content,
  footer,
  cardCls,
  cardHeaderCls,
  cardTitleCls,
  cardContentCls,
  cardFooterCls,
}: CardProps) => {
  return (
    <Card className={`${cardCls}`}>
      <CardHeader className={`${cardHeaderCls}`}>
        <CardTitle className={`${cardTitleCls}`}>{title}</CardTitle>
        {header}
      </CardHeader>
      <CardContent className={`${cardContentCls}`}>{content}</CardContent>
      <CardFooter className={`${cardFooterCls}`}>{footer}</CardFooter>
    </Card>
  );
};

export default CommonCard;
