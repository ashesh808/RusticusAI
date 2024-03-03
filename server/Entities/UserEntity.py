from uuid import UUID
from dataclasses import dataclass

UserId = UUID

@dataclass
class User:
    user_id: int
    user_name: str
    password: str