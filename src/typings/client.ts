import { BovsoftResponse } from "./index";
import {
   GetAdditionalInfoAplicabilityResponse,
   GetAdditionalInfoAplicabilityParams,
   GetAdditionalInfoArticleParams,
   GetAdditionalInfoArticleResponse,
   GetArticlesForKBAParams,
   GetArticlesForKBAResponse,
   GetArticlesForMimeParams,
   GetArticlesForMimeResponse,
   GetArticlesForTypeParams,
   GetArticlesForTypeResponse,
   GetArtidByReferenceParams,
   GetArtidByReferenceResponse,
   GetBrandsResponse, 
   GetCriteriesAplicabilityOfArticleParams,
   GetCriteriesAplicabilityOfArticleResponse,
   GetCriteriesOfArticleResponse,
   GetCriteriesOfArticleParams, 
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
   GetListArticlesFromTradeGroupResponse,
   GetListArticlesFromTreeCategoryParams,
   GetListArticlesFromTreeCategoryResponse,
   GetListEnginesForCarParams,
   GetListEnginesForCarResponse,
   GetListReplacedNumbersArticleParams,
   GetListReplacedNumbersArticleResponse,
   GetListTradeGroupsForCarParams,
   GetListTradeGroupsForCarResponse,
   GetManufacturersParams,
   GetManufacturersResponse,
   GetModelsParams,
   GetModelsResponse,
   GetPriceFromSupplierParams,
   GetPriceFromSupplierResponse,
   GetSearchArticleByNameForCarParams,
   GetSearchArticleByNameForCarResponse,
   GetSearchByCrossrefAndBrandParams,
   GetSearchByCrossrefAndBrandResponse,
   GetSearchByCrossrefParams,
   GetSearchByCrossrefResponse,
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
   GetTypesParams,
   GetTypesResponse
} from "../api/index";

export interface Client {
  getAdditionalInfoAplicability(params: GetAdditionalInfoAplicabilityParams): Promise<BovsoftResponse<GetAdditionalInfoAplicabilityResponse>>;
  getAdditionalInfoArticle(params: GetAdditionalInfoArticleParams): Promise<BovsoftResponse<GetAdditionalInfoArticleResponse>>;
  getArticlesForKBA(params: GetArticlesForKBAParams): Promise<BovsoftResponse<GetArticlesForKBAResponse>>;
  getArticlesForMime(params: GetArticlesForMimeParams): Promise<BovsoftResponse<GetArticlesForMimeResponse>>;
  getArticlesForType(params: GetArticlesForTypeParams): Promise<BovsoftResponse<GetArticlesForTypeResponse>>;
  getArtidByReference(params: GetArtidByReferenceParams): Promise<BovsoftResponse<GetArtidByReferenceResponse>>;
  getBrands(): Promise<BovsoftResponse<GetBrandsResponse>>;
  getCriteriesAplicabilityOfArticle(params: GetCriteriesAplicabilityOfArticleParams): Promise<BovsoftResponse<GetCriteriesAplicabilityOfArticleResponse>>;
  getCriteriesOfArticle(params: GetCriteriesOfArticleParams): Promise<BovsoftResponse<GetCriteriesOfArticleResponse>>;
  getCrossReferencesForArticle(params: GetCrossReferencesForArticleParams): Promise<BovsoftResponse<GetCrossReferencesForArticleResponse>>;
  getImageForArticle(params: GetImageForArticleParams): Promise<BovsoftResponse<GetImageForArticleResponse>>;
  getInfoArticle(params: GetInfoArticleParams): Promise<BovsoftResponse<GetInfoArticleResponse>>;
  getInfoCar(params: GetInfoCarParams): Promise<BovsoftResponse<GetInfoCarResponse>>;
  getInfoEngine(params: GetInfoEngineParams): Promise<BovsoftResponse<GetInfoEngineResponse>>;
  getLanguages(): Promise<BovsoftResponse<GetLanguagesResponse>>;
  getListArticlesFromTradeGroup(params: GetListArticlesFromTradeGroupParams): Promise<BovsoftResponse<GetListArticlesFromTradeGroupResponse>>;
  getListArticlesFromTreeCategory(params: GetListArticlesFromTreeCategoryParams): Promise<BovsoftResponse<GetListArticlesFromTreeCategoryResponse>>;
  getListEnginesForCar(params: GetListEnginesForCarParams): Promise<BovsoftResponse<GetListEnginesForCarResponse>>;
  getListReplacedNumbersArticle(params: GetListReplacedNumbersArticleParams): Promise<BovsoftResponse<GetListReplacedNumbersArticleResponse>>;
  getListTradeGroupsForCar(params: GetListTradeGroupsForCarParams): Promise<BovsoftResponse<GetListTradeGroupsForCarResponse>>;
  getManufacturers(params: GetManufacturersParams): Promise<BovsoftResponse<GetManufacturersResponse>>;
  getModels(params: GetModelsParams): Promise<BovsoftResponse<GetModelsResponse>>;
  getPriceFromSupplier(params: GetPriceFromSupplierParams): Promise<BovsoftResponse<GetPriceFromSupplierResponse>>;
  getSearchArticleByNameForCar(params: GetSearchArticleByNameForCarParams): Promise<BovsoftResponse<GetSearchArticleByNameForCarResponse>>;
  getSearchByCrossrefAndBrand(params: GetSearchByCrossrefAndBrandParams): Promise<BovsoftResponse<GetSearchByCrossrefAndBrandResponse>>;
  getSearchByCrossref(params: GetSearchByCrossrefParams): Promise<BovsoftResponse<GetSearchByCrossrefResponse>>;
  getSearchCarByName(params: GetSearchCarByNameParams): Promise<BovsoftResponse<GetSearchCarByNameResponse>>;
  getSearchEngineByCode(params: GetSearchEngineByCodeParams): Promise<BovsoftResponse<GetSearchEngineByCodeResponse>>;
  getSearchKBA(params: GetSearchKBAParams): Promise<BovsoftResponse<GetSearchKBAResponse>>;
  getSearchMIME(params: GetSearchMIMEParams): Promise<BovsoftResponse<GetSearchMIMEResponse>>;
  getSpecificationArticle(params: GetSpecificationArticleParams): Promise<BovsoftResponse<GetSpecificationArticleResponse>>;
  getSuppliers(): Promise<BovsoftResponse<GetSuppliersResponse>>;
  getTreeCategories(params: GetTreeCategoriesParams): Promise<BovsoftResponse<GetTreeCategoriesResponse>>;
  getTypesForArticle(params: GetTypesForArticleParams): Promise<BovsoftResponse<GetTypesForArticleResponse>>;
  getTypes(params: GetTypesParams): Promise<BovsoftResponse<GetTypesResponse>>;
}
