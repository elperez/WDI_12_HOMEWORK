class Api::CommentsController < ApplicationController

  def show

    review = Comment.find(params[:id])

    # render json: article
    render json: {
      name: "review.name",
      comment: "review.comment"
    }
  end
end
