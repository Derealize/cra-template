import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import Play from './Play';
import Sizing from './Sizing';
import Color from './Color';
import Typography from './Typography';
import Shadows from './Shadows';
import BuildAnythingSimple from './build-anything/Simple';
import BuildAnythingPlayful from './build-anything/Playful';
import BuildAnythingElegant from './build-anything/Elegant';
import BuildAnythingBrutalist from './build-anything/Brutalist';
import Performance from './Performance';
import Responsive from './Responsive';
import States from './States';
import ComponentRecipes from './component/Recipes';
import ApplyDirective from './ApplyDirective';
import Dark from './Dark';
import Grid from './Grid';
import Transforms from './Transforms';
import Gradients from './Gradients';
import MarketingHero from './marketing/Hero';
import MarketingFeature from './marketing/Feature';
import MarketingCTA from './marketing/CTA';
import MarketingHeaders from './marketing/Headers';
import MarketingBanners from './marketing/Banners';
import ApplicationuiLayouts from './application-ui/Layouts';
import ApplicationuiHeadings from './application-ui/Headings';
import ApplicationuiDescriptionLists from './application-ui/DescriptionLists';
import ApplicationuiTables from './application-ui/Tables';
import ApplicationuiNavbars from './application-ui/Navbars';
import ApplicationuiPagination from './application-ui/Pagination';
import ApplicationuiModals from './application-ui/Modals';
import ApplicationuiSlideOvers from './application-ui/SlideOvers';
import ApplicationuiAvatars from './application-ui/Avatars';
import ApplicationuiDropdowns from './application-ui/Dropdowns';
import ApplicationuiFormFormLayout from './application-ui/form/FormLayout';
import ApplicationuiFormInputGroups from './application-ui/form/InputGroups';
import ApplicationuiFormSelectMenus from './application-ui/form/SelectMenus';
import ApplicationuiFormSignIn from './application-ui/form/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Welcome" component={Welcome} />
        <Route path="/Play" component={Play} />
        <Route path="/Sizing" component={Sizing} />
        <Route path="/Color" component={Color} />
        <Route path="/Typography" component={Typography} />
        <Route path="/Shadows" component={Shadows} />
        <Route path="/build-anything/Simple" component={BuildAnythingSimple} />
        <Route path="/build-anything/Playful" component={BuildAnythingPlayful} />
        <Route path="/build-anything/Elegant" component={BuildAnythingElegant} />
        <Route path="/build-anything/Brutalist" component={BuildAnythingBrutalist} />
        <Route path="/Performance" component={Performance} />
        <Route path="/Responsive" component={Responsive} />
        <Route path="/States" component={States} />
        <Route path="/component/Recipes" component={ComponentRecipes} />
        <Route path="/ApplyDirective" component={ApplyDirective} />
        <Route path="/Dark" component={Dark} />
        <Route path="/Grid" component={Grid} />
        <Route path="/Transforms" component={Transforms} />
        <Route path="/Gradients" component={Gradients} />
        <Route path="/marketing/Hero" component={MarketingHero} />
        <Route path="/marketing/Feature" component={MarketingFeature} />
        <Route path="/marketing/CTA" component={MarketingCTA} />
        <Route path="/marketing/Headers" component={MarketingHeaders} />
        <Route path="/marketing/Banners" component={MarketingBanners} />
        <Route path="/application-ui/Layouts" component={ApplicationuiLayouts} />
        <Route path="/application-ui/Headings" component={ApplicationuiHeadings} />
        <Route path="/application-ui/DescriptionLists" component={ApplicationuiDescriptionLists} />
        <Route path="/application-ui/Tables" component={ApplicationuiTables} />
        <Route path="/application-ui/Navbars" component={ApplicationuiNavbars} />
        <Route path="/application-ui/Pagination" component={ApplicationuiPagination} />
        <Route path="/application-ui/Modals" component={ApplicationuiModals} />
        <Route path="/application-ui/SlideOvers" component={ApplicationuiSlideOvers} />
        <Route path="/application-ui/Avatars" component={ApplicationuiAvatars} />
        <Route path="/application-ui/Dropdowns" component={ApplicationuiDropdowns} />
        <Route path="/application-ui/form/FormLayout" component={ApplicationuiFormFormLayout} />
        <Route path="/application-ui/form/InputGroups" component={ApplicationuiFormInputGroups} />
        <Route path="/application-ui/form/SelectMenus" component={ApplicationuiFormSelectMenus} />
        <Route path="/application-ui/form/SignIn" component={ApplicationuiFormSignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
