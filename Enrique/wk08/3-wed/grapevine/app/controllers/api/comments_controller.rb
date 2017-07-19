class Api::CommentsController < ApplicationController

  def show
    json_comments={}
    json_comments[:data]=[]
    # review = Comment.find(params[:id])
    @comments = Comment.where(article_id: params[:id])
    @comments.each do |item|

      # result[:name] = comment.name
      json_comments[:data].push({
        :name => item.name,
        :comment => item.comment
      })

    end
    # render json: article
    render json: json_comments
  end
end
