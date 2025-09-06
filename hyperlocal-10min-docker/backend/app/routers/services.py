from fastapi import APIRouter
router = APIRouter(prefix='/services')
@router.get('/')
def ok(): return {'router':'services'}
