import { Router } from 'express';
import productRoutes from './productRoutes';

const setRoutes = (app: any) => {
    const router = Router();

    router.use('/products', productRoutes);

    app.use('/api', router);
};

export default setRoutes;