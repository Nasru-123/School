import baseModel from '../../utils/baseModel';


export class User extends baseModel {
  // Table name is the only required property.
  static get tableName() {
    return 'users';
  }
  static get idColumn() {
    return 'userId';
  }

}