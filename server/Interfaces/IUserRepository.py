import abc
from Entities.UserEntity import User

class IUserRepository(metaclass=abc.ABCMeta):
    """An interface to User repository"""

    @abc.abstractmethod
    def add(self, entity: User):
        """Adds new entity to a repository"""
        raise NotImplementedError()

    @abc.abstractmethod
    def remove(self, entity: User):
        """Removes existing entity from a repository"""
        raise NotImplementedError()

    @abc.abstractmethod
    def get_by_id(id) -> User:
        """Retrieves entity by its identity"""
        raise NotImplementedError()

    def __getitem__(self, index) -> User:
        return self.get_by_id(index)