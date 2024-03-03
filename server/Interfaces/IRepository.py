from abc import ABC, abstractmethod

class IRepository(ABC):
    @abstractmethod 
    def add(self):
        raise NotImplementedError 

    @abstractmethod
    def getAll(self): 
        raise NotImplementedError
    
    @abstractmethod
    def get(self): 
        raise NotImplementedError
    
    @abstractmethod
    def delete(self): 
        raise NotImplementedError
    