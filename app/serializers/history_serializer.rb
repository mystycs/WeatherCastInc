class HistorySerializer < ActiveModel::Serializer
  attributes :user_id, :lat, :long, :address
end
