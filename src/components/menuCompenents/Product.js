import React from 'react'
import {Col, DropdownButton, Row} from 'react-bootstrap'
import '../../styles/product.css'
import {Link} from 'react-router-dom'

export default function Product({selectedProduct}) {
    return (
        <div className='product'>
            <div className='first-section'>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={7} className='right-part justify-content-center'>
                            <h1 className='first-section-h1'>{selectedProduct.name}</h1>
                            <p  className='first-section-h2 px-sm-4'>MAKING PEOPLE SMILE SINCE 1950</p>
                            <p  className='first-section-h3 px-sm-4'>Our delicious donuts come in a variety of flavors and are free of artificial dyes, so there’s a favorite for everyone.</p>
                            <p  className='first-section-h4 px-sm-4'>Limited Edition and Custom Photo Donuts may contain artificial dyes.</p>
                            <p  className='first-section-h5'>Let us come to you!</p>
                            <Link className='primaryBtn' to='signup'>
                                <img className='img-btn' src='https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/espresso-coffee/pdpespressocoffee/Dunkin_Delivers_Button_SVG.svg' alt='delivers buttonx'    loading='lazy'/>
                            </Link>
                    </Col>
                    <Col lg={5}>
                        <img className='primary-btn' src={selectedProduct.img} style={{maxHeight:'100%',maxWidth:'100%'}} loading='lazy' alt={selectedProduct.alt}/>
                    </Col>
                </Row>
            </div>
            <div className='second-section'>
                <Row className='justify-content-center align-items-center' style={{marginBottom:'50px'}}>
                    <Col lg={6} className='right-part justify-content-center'>
                            <p  className='second-section-h5'>CUSTOMIZATION & NUTRITION</p>
                            <p  className='second-section-h6'>See detailed nutrition, allergy, and ingredient information below.</p>
                            <div className='d-flex chocies'>
                                <div className='d-inline'>
                                    <p  className='second-section-h5 d-inline mr-4'>VARIETY</p>
                                    <DropdownButton id="dropdown-basic-button" title={selectedProduct.name} disabled>
                                    </DropdownButton>
                                </div>
                                <div className='d-inline'>
                                    <p  className='second-section-h5 d-inline ml-4'>FLAVOR</p>
                                    <DropdownButton id="dropdown-basic-button" title="none" disabled>
                                    </DropdownButton>
                                </div>
                            </div>
                    </Col>
                    <Col lg={6}>
                        <div className='d-flex'>
                            <p className='text-center' style={{minWidth:'50%'}}>allergens</p>
                            <p className='text-center' style={{minWidth:'50%'}}>ingerdients</p>
                        </div>
                        <div class="d-flex p-4 mt-2">
                            <div class="ingredients__allergen ingredients__allergen--milk show">
                            <span class="icon-allergen-milk">Milk</span>
                            </div>
                            <div class="ingredients__allergen ingredients__allergen--eggs show ">
                            <span class="icon-allergen-eggs">Eggs</span>
                            </div>
                            <div class="ingredients__allergen ingredients__allergen--wheat show">
                            <span class="icon-allergen-wheat">Wheat</span>
                            </div>
                            <div class="ingredients__allergen default-text d-none " >
                            <p>No allergen information is available for this product at this time.</p>
                            </div>
                        </div>
                        <div>
                            <p className='px-sm-4'>
                                May contain traces of Tree Nuts (Walnuts)
                            </p>
                            <p className='px-sm-4'>
                                Please be advised that any of our products may contain, or may have come in contact with, allergens including Eggs,
                                Fish, Milk, Peanuts, Shellfish, Soy, Tree nuts, and Wheat. Before placing your order, please inform your server if a person in
                                 your party has a food allergy.
                            </p>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className='right-part'>
                    <table class="nutrition-table">
                        <thead class="nutrition-fact__tableHeader">
                            <tr>
                                <th colspan="4" class="nutrition-header1">Nutrition Facts Per Serving </th>
                                <th class="nutrition-facts__amount">
                                    <span class="nutrition-facts__value d-inline" data-key="{servingSize}">1 Sandwich</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody data-xmlversion="2020" class="nutrition-facts__tableBody">
                        <tr>
                            <td colspan="4" class="nutrition-facts__label">
                            Calories
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{calories}">680</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label"></td>
                            <td colspan="1" class="nutrition-facts__amount">
                            % Daily Value*
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Total Fat
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{fatTotal}">34</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dFatTotal}" >44</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Saturated Fat
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{saturatedFat}" >12</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dSaturatedFat}" >60</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Trans Fat
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{transfat}">0</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount"></td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Cholesterol
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{cholesterol}" >220</span><span class="nutrition-facts__suffix">mg</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dCholesterol}">73</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Sodium
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{sodium}">1,500</span><span class="nutrition-facts__suffix">mg</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dSodium}">65</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Total Carbohydrate
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{carbohydrates}">68</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dCarbohydrates}">25</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Dietary Fiber
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{dietaryFiber}" >5</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dDietaryFiber}">18</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Total Sugars
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{sugarsTotal}">8</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount"></td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Includes Added Sugars
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{addedSugars}">4</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dAddedSugars}">8</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Protein
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{protein}">26</span><span class="nutrition-facts__suffix">g</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value nutrition-facts__hide d-inline" data-key="{dProtein}">-</span><span class="nutrition-facts__suffix nutrition-facts__hide">%</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Vitamin D
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{vitaminD}">2</span><span class="nutrition-facts__suffix">mcg</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dVitaminD}">10</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Calcium
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{calcium}" >162</span><span class="nutrition-facts__suffix">mg</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dCalcium}" >10</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Iron
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{iron}" >5</span><span class="nutrition-facts__suffix">mg</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dIron}" >30</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="3" class="nutrition-facts__label">
                            Potassium
                            </td>
                            <td class="nutrition-facts__text">
                            <span class="nutrition-facts__value d-inline" data-key="{potassium}" >330</span><span class="nutrition-facts__suffix">mg</span>
                            </td>
                            <td class="nutrition-facts__amount">
                            <span class="nutrition-facts__value d-inline" data-key="{dPotassium}" >8</span><span class="nutrition-facts__suffix">%</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
