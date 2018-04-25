export class User {
    // 1st step signup
    doc_fname: string;
    doc_lname: string;
    doc_tel: number;
    doc_password: string;
    doc_email: string;
    //  2nd step signup
    doc_profStatement: string;
    doc_specialisation: string;
    doc_qualification: string;
    doc_instituteName: string;
    doc_procurementYear: number;
    doc_pimg?: any;
    doc_cimg?: any;
    doc_pract_from: string;
    doc_prcur_year: number;
    doc_off_locX: number;
    doc_off_locY: number;
    doc_timeSlot: number;
    doc_cnsltFee: number;
    doc_follupCnsltFee: number;
    doc_address: string;
    doc_hosp_affliation: string;
    doc_avStartTime: number;
    doc_avEndTime: number;

}
export class Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: number;
}

