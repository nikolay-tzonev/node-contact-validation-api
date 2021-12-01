import { DefaultContext } from 'koa';
import { ContactValidationRequest } from '../model/contact';

export default class ContactController {

    /**
     * @swagger
     * /contact/validate:
     *  get:
     *      tags:
     *          - Contact
     *      summary: Validates the contact details passed with the request.
     *      responses:
     *          200:
     *              description: validation result
     *              content:
     *                  application/plain:
     *                      schema:
     *                          type: string
     *                      example:
     *                          ok
     *          400:
     *              description: validation result
     */
    public static async validate(ctx: DefaultContext) {
        const contact = <ContactValidationRequest>ctx.request.body;

        const nameLength = contact.firstName.length + contact.lastName.length;
        if(nameLength < 5){
            ctx.body = { status: "error", errorMsg: "Name must be 5 leters or more." };
            ctx.response.status = 400;
        }
        else{
            ctx.body = { status: "ok" };
        }
    }
}
