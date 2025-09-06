from fastapi import APIRouter
router = APIRouter(prefix='/whatsapp')
@router.get('/')
def ok(): return {'router':'whatsapp'}
