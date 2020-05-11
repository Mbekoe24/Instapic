class PhotosController < ApplicationController
    before_action :set_photo, only: [:show, :update, :destroy]

       def index
        @post = Post.find(params[:post_id])
        @photos = Photo.where(post_id: @post.id)
        render json: @photos, include: :post, status: :ok
      end

#find
  def show
        @post = Post.find(params[:post_id])
        @photos = Photo.where(post_id: @post.id)
        @photo = @photos.find(params[:id])
        render json: @photos, include: :post, status: :ok
    end
    #creating a photo 
 def create
        @photo = Photo.new(photo_params)
        if @photos.save 
            render json: @photo, status: :created
        else
            render json: @photo.errors, status: :unprocessable_entity
        end
    end

 def update
        if @photo.update(photo_params)
            render json: @photo
        else
        render json: @photo.errors, status: :unprocessable_entity
    end
end

 def destroy
        @photo.destroy
    end

   private
    def set_photo
        @photo = Photo.find(params[:id])
      end
    def photo_params
        params.require(:photo).permit(:name, :image_url)
    end

end
