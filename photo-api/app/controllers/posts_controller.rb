class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
     before_action :authorize_request, only: [:create, :update, :destroy]

    def index
      @posts = Post.all
      render json: @posts, include: [:photos, :user], status: :ok
    end

  def show
        render json: @post, include:  [:photos, :user], status: :ok
    end

       def create
        @post = Post.new(content: post_params[:content])
        @current_user.posts << @post
        post_params[:photos].map do |photo|
          new_photo = Photo.new(photo)
          @post.photos << new_photo
        end
            render json: @post, include: :photos, status: :created
    end
    
      def update
        if @post.update(post_params)
            render json: @post
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

 def destroy
        @post.destroy
    end

private
    def set_post
        @post = Post.find(params[:id])
      end
    def post_params
        params.require(:post).permit(:content, :photos => [:image_url ])
    end

end
