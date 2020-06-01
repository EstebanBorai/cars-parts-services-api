import { Request } from './request';
import { Credentials, RequestOptions, Format, Lang, Func, BovsoftResponse, IClient } from '../typings/index';
import {
  GetAdditionalInfoAplicabilityResponse,
  GetAdditionalInfoAplicabilityParams,
  GetAdditionalInfoArticleParams,
  GetAdditionalInfoArticleResponse,
  GetArticlesForKBAParams,
  GetArticlesForKBAResponse,
  GetArticlesForMimeParams,
  GetArticlesForMimeResponse,
  GetArtidByReferenceParams,
  GetArtidByReferenceResponse,
  GetBrandsResponse,
  GetCriteriesAplicabilityOfArticleParams,
  GetCriteriesAplicabilityOfArticleResponse,
  GetCriteriesOfArticleParams,
  GetCriteriesOfArticleResponse,
  GetCrossReferencesForArticleParams,
  GetCrossReferencesForArticleResponse,
  GetImageForArticleParams,
  GetImageForArticleResponse,
  GetInfoArticleParams,
  GetInfoArticleResponse,
  GetInfoCarParams,
  GetInfoCarResponse,
  GetInfoEngineParams,
  GetInfoEngineResponse,
  GetLanguagesResponse,
  GetListArticlesFromTradeGroupParams,
  GetListTradeGroupsForCarParams,
  GetListArticlesFromTradeGroupResponse,
  GetListArticlesFromTreeCategoryParams,
  GetListArticlesFromTreeCategoryResponse,
  GetListEnginesForCarParams,
  GetListEnginesForCarResponse,
  GetListReplacedNumbersArticleParams,
  GetListReplacedNumbersArticleResponse,
  GetListTradeGroupsForCarResponse,
  GetManufacturersResponse,
  GetModelsResponse,
  GetPriceFromSupplierParams,
  GetPriceFromSupplierResponse,
  GetSearchArticleByNameForCarParams,
  GetSearchArticleByNameForCarResponse,
  GetSearchByCrossrefAndBrandParams,
  GetSearchByCrossrefAndBrandResponse,
  GetSearchByCrossrefResponse,
  GetSearchByCrossrefParams,
  GetSearchCarByNameParams,
  GetSearchCarByNameResponse,
  GetSearchEngineByCodeParams,
  GetSearchEngineByCodeResponse,
  GetSearchKBAParams,
  GetSearchKBAResponse,
  GetSearchMIMEParams,
  GetSearchMIMEResponse,
  GetSpecificationArticleParams,
  GetSpecificationArticleResponse,
  GetSuppliersResponse,
  GetTreeCategoriesParams,
  GetTreeCategoriesResponse,
  GetTypesForArticleParams,
  GetTypesForArticleResponse,
  GetTypesResponse,
  GetTypesParams,
  GetArticlesForTypeParams,
  GetArticlesForTypeResponse
} from '../api/index';

export class Client implements IClient {
  protected baseapi: string;
  protected creds: Credentials;
  protected requestOptions: RequestOptions;
  protected request: Request;

  constructor(baseapi: string, creds: Credentials, options?: RequestOptions) {
    this.creds = creds;
    this.baseapi = baseapi;

    if (options) {
      this.requestOptions = {...options};
    } else {
      this.requestOptions = {
        format: Format.JSON,
        lang: Lang.English
      };
    }

    this.request = new Request(this.baseapi, this.creds, this.requestOptions);
  }

  public async getAdditionalInfoAplicability(params: GetAdditionalInfoAplicabilityParams): Promise<BovsoftResponse<GetAdditionalInfoAplicabilityResponse>> {
    return await this.request.get<GetAdditionalInfoAplicabilityResponse>(Func.GetAdditionalInfoAplicability, params);
  }

  public async getAdditionalInfoArticle(params: GetAdditionalInfoArticleParams): Promise<BovsoftResponse<GetAdditionalInfoArticleResponse>> {
    return await this.request.get<GetAdditionalInfoArticleResponse>(Func.GetAdditionalInfoArticle, params);
  }

  public async getArticlesForKBA(params: GetArticlesForKBAParams): Promise<BovsoftResponse<GetArticlesForKBAResponse>> {
    return await this.request.get<GetArticlesForKBAResponse>(Func.GetArticlesForKBA, params);
  }

  public async getArticlesForMime(params: GetArticlesForMimeParams): Promise<BovsoftResponse<GetArticlesForMimeResponse>> {
    return await this.request.get<GetArticlesForMimeResponse>(Func.GetArticlesForMime, params);
  }

  public async getArticlesForType(params: GetArticlesForTypeParams): Promise<BovsoftResponse<GetArticlesForTypeResponse>> {
    return await this.request.get<GetArticlesForTypeResponse>(Func.GetArticlesForType, params);
  }

  public async getArtidByReference(params: GetArtidByReferenceParams): Promise<BovsoftResponse<GetArtidByReferenceResponse>> {
    return await this.request.get<GetArtidByReferenceResponse>(Func.GetArtIDByReference, params);
  }

  public async getBrands(): Promise<BovsoftResponse<GetBrandsResponse>> {
    return await this.request.get<GetBrandsResponse>(Func.GetBrands);
  }

  public async getCriteriesAplicabilityOfArticle(params: GetCriteriesAplicabilityOfArticleParams): Promise<BovsoftResponse<GetCriteriesAplicabilityOfArticleResponse>> {
    return await this.request.get<GetCriteriesAplicabilityOfArticleResponse>(Func.GetCriteriesAplicabilityOfArticle, params);
  }

  public async getCriteriesOfArticle(params: GetCriteriesOfArticleParams): Promise<BovsoftResponse<GetCriteriesOfArticleResponse>> {
    return await this.request.get<GetCriteriesOfArticleResponse>(Func.GetCriteriesOfArticle, params);
  }

  public async getCrossReferencesForArticle(params: GetCrossReferencesForArticleParams): Promise<BovsoftResponse<GetCrossReferencesForArticleResponse>> {
    return await this.request.get<GetCrossReferencesForArticleResponse>(Func.GetCrossReferencesForArticle, params);
  }

  public async getImageForArticle(params: GetImageForArticleParams): Promise<BovsoftResponse<GetImageForArticleResponse>> {
    return await this.request.get<GetImageForArticleResponse>(Func.GetImageForArticle, params);
  }

  public async getInfoArticle(params: GetInfoArticleParams): Promise<BovsoftResponse<GetInfoArticleResponse>> {
    return await this.request.get<GetInfoArticleResponse>(Func.GetInfoArticle, params);
  }

  public async getInfoCar(params: GetInfoCarParams): Promise<BovsoftResponse<GetInfoCarResponse>> {
    return await this.request.get<GetInfoCarResponse>(Func.GetInfoCar, params);
  }

  public async getInfoEngine(params: GetInfoEngineParams): Promise<BovsoftResponse<GetInfoEngineResponse>> {
    return await this.request.get<GetInfoEngineResponse>(Func.GetInfoEngine, params);
  }

  public async getLanguages(): Promise<BovsoftResponse<GetLanguagesResponse>> {
    return await this.request.get<GetLanguagesResponse>(Func.GetLanguages);
  }

  public async getListArticlesFromTradeGroup(params: GetListArticlesFromTradeGroupParams): Promise<BovsoftResponse<GetListArticlesFromTradeGroupResponse>> {
    return await this.request.get<GetListArticlesFromTradeGroupResponse>(Func.GetListArticlesFromTradeGroup, params);
  }

  public async getListArticlesFromTreeCategory(params: GetListArticlesFromTreeCategoryParams): Promise<BovsoftResponse<GetListArticlesFromTreeCategoryResponse>> {
    return await this.request.get<GetListArticlesFromTradeGroupResponse>(Func.GetListArticlesFromTreeCategory, params);
  }

  public async getListEnginesForCar(params: GetListEnginesForCarParams): Promise<BovsoftResponse<GetListEnginesForCarResponse>> {
    return await this.request.get<GetListEnginesForCarResponse>(Func.GetListEnginesForCar, params);
  }

  public async getListReplacedNumbersArticle(params: GetListReplacedNumbersArticleParams): Promise<BovsoftResponse<GetListReplacedNumbersArticleResponse>> {
    return await this.request.get<GetListReplacedNumbersArticleResponse>(Func.GetListReplacedNumbersArticle, params);
  }

  public async getListTradeGroupsForCar(params: GetListTradeGroupsForCarParams): Promise<BovsoftResponse<GetListTradeGroupsForCarResponse>> {
    return await this.request.get<GetListTradeGroupsForCarResponse>(Func.GetListTradeGroupsForCar, params);
  }

  public async getManufacturers(): Promise<BovsoftResponse<GetManufacturersResponse>> {
    return await this.request.get<GetManufacturersResponse>(Func.GetManufacturers);
  }

  public async getModels(): Promise<BovsoftResponse<GetModelsResponse>> {
    return await this.request.get<GetModelsResponse>(Func.GetModels);
  }

  public async getPriceFromSupplier(params: GetPriceFromSupplierParams): Promise<BovsoftResponse<GetPriceFromSupplierResponse>> {
    return await this.request.get<GetPriceFromSupplierResponse>(Func.GetPriceFromSupplier, params);
  }

  public async getSearchArticleByNameForCar(params: GetSearchArticleByNameForCarParams): Promise<BovsoftResponse<GetSearchArticleByNameForCarResponse>> {
    return await this.request.get<GetSearchArticleByNameForCarResponse>(Func.GetSearchArticleByNameForCar, params);
  }

  public async getSearchByCrossrefAndBrand(params: GetSearchByCrossrefAndBrandParams): Promise<BovsoftResponse<GetSearchByCrossrefAndBrandResponse>> {
    return await this.request.get<GetSearchByCrossrefAndBrandResponse>(Func.GetSearchByCrossrefAndBrand, params);
  }

  public async getSearchByCrossref(params: GetSearchByCrossrefParams): Promise<BovsoftResponse<GetSearchByCrossrefResponse>> {
    return await this.request.get<GetSearchByCrossrefResponse>(Func.GetSearchByCrossref, params);
  }

  public async getSearchCarByName(params: GetSearchCarByNameParams): Promise<BovsoftResponse<GetSearchCarByNameResponse>> {
    return await this.request.get<GetSearchCarByNameResponse>(Func.GetSearchCarByName, params);
  }

  public async getSearchEngineByCode(params: GetSearchEngineByCodeParams): Promise<BovsoftResponse<GetSearchEngineByCodeResponse>> {
    return await this.request.get<GetSearchEngineByCodeResponse>(Func.GetSearchEngineByCode, params);
  }

  public async getSearchKBA(params: GetSearchKBAParams): Promise<BovsoftResponse<GetSearchKBAResponse>> {
    return await this.request.get<GetSearchKBAResponse>(Func.GetSearchKBA, params);
  }

  public async getSearchMIME(params: GetSearchMIMEParams): Promise<BovsoftResponse<GetSearchMIMEResponse>> {
    return await this.request.get<GetSearchMIMEResponse>(Func.GetSearchMIME, params);
  }

  public async getSpecificationArticle(params: GetSpecificationArticleParams): Promise<BovsoftResponse<GetSpecificationArticleResponse>> {
    return await this.request.get<GetSpecificationArticleResponse>(Func.GetSpecificationArticle, params);
  }

  public async getSuppliers(): Promise<BovsoftResponse<GetSuppliersResponse>> {
    return await this.request.get<GetSuppliersResponse>(Func.GetSuppliers);
  }

  public async getTreeCategories(params: GetTreeCategoriesParams): Promise<BovsoftResponse<GetTreeCategoriesResponse>> {
    return await this.request.get<GetTreeCategoriesResponse>(Func.GetTreeCategories, params);
  }

  public async getTypesForArticle(params: GetTypesForArticleParams): Promise<BovsoftResponse<GetTypesForArticleResponse>> {
    return await this.request.get<GetTypesForArticleResponse>(Func.GetTypesForArticle, params);
  }

  public async getTypes(params: GetTypesParams): Promise<BovsoftResponse<GetTypesResponse>> {
    return await this.request.get<GetTypesResponse>(Func.GetTypes, params);
  }
}
