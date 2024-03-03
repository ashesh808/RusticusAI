from sqlalchemy.orm import Session
from Interfaces.IUserRepository import IUserRepository
from Entities.UserEntity import User
from Models.UserModel import UserModel
from DataMappers.UserDataMapper import UserDataMapper

# a sentinel value for keeping track of entities removed from the repository
REMOVED = object()

class SqlAlchemyUserRepository(IUserRepository):
    """SqlAlchemy implementation of ListingRepository"""

    def __init__(self, session: Session, identity_map=None):
        self.session = session
        self._identity_map = identity_map or dict()

    def add(self, entity: User):
        self._identity_map[entity.user_id] = entity
        instance = UserDataMapper.entity_to_model(entity)
        self.session.add(instance)
    
    def remove(self, entity: User):
        """Removes existing entity from a repository"""
        raise NotImplementedError()

    def get_by_id(id) -> User:
        """Retrieves entity by its identity"""
        raise NotImplementedError()

    def __getitem__(self, index) -> User:
        return self.get_by_id(index)