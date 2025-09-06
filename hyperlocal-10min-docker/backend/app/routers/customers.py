from fastapi import APIRouter
router = APIRouter(prefix='/customers')
@router.get('/')
def ok(): return {'router':'customers'}
