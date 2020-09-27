import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name} </CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      );
    else return <div> </div>;
  }

  renderComments(dish) {
    if (dish != null)
      var dishComments = dish.comments.map((comment) => {
        return (
          <div>
            <li>{comment.comment}</li>
            <br />
            <li>
              -- {comment.author}, &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
            <br />
          </div>
        );
      });
    if (dish != null)
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{dishComments}</ul>
        </div>
      );
    else return <div></div>;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
