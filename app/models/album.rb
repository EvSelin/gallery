class Album < ApplicationRecord

  has_many :photos

  mount_uploader :cover, CoverUploader

end
