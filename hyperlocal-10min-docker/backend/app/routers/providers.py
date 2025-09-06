from fastapi import APIRouter
router = APIRouter(prefix='/providers')
@router.get('/')
def ok(): return {'router':'providers'}
