import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  private listSpecificationssUseCase: ListSpecificationsUseCase;

  constructor(listSpecificationsUseCase: ListSpecificationsUseCase) {
    this.listSpecificationssUseCase = listSpecificationsUseCase;
  }

  handle(request: Request, response: Response) {
    const specifications = this.listSpecificationssUseCase.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationsController };
