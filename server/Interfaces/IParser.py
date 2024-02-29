from abc import ABC, abstractmethod

class ContentParser(ABC):
    @abstractmethod
    def parse(self):
        pass