from fastapi import APIRouter
router = APIRouter(prefix='/public')
@router.get('/')
def ok(): return {'router':'public'}
