from fastapi import APIRouter
router = APIRouter(prefix='/ws')
@router.get('/')
def ok(): return {'router':'ws'}
