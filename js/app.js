const conditionList = document.querySelector("#condition");
const country = document.querySelector("country");
const result = document.querySelector(".result");

conditionList.addEventListener("change", function (e) {
  condition = e.target.value;
  console.log(condition);
  updateResultsDiv();
});


const updateResultsDiv = function () {
  if (condition === "sci") {
    result.innerHTML = `<a href="https://sciptguide.com/" target="_blank" rel="noopener noreferer"> Australian and New Zealand SCI Clinical Practice Guidelines</a>
    <p>(Glinsky et al., 2024</p>
    <a href="https://www.sciencedirect.com/science/article/pii/S2214031X19302189?via%3Dihub" target="_blank" rel="noopener noreferer">Clinical Neurorestorative Therapeutic Guidelines for Spinal Cord Injury</a>
    <p>(Huang et al., 2019)</p>
    <a href="https://www.nature.com/articles/s41393-017-0017-3" target="_blank" rel="noopener noreferer">Evidence-based scientific exercise guidelines for adults with spinal cord injury: an update and a new guideline</a>
    <p>(Martin Ginis et al., 2018)</p>
    <a href="https://journals.lww.com/jnpt/fulltext/2020/01000/clinical_practice_guideline_to_improve_locomotor.8.aspx" target="_blank" rel="noopener noreferer">Clinical Practice Guideline to Improve Locomotor Function Following Chronic Stroke, Incomplete Spinal Cord Injury, and Brain Injury</a>
    <p>(Hornby et al., 2020)</p>
    <a href="https://estim4wounds.ca/wp-content/uploads/TheCanadianBPGforPreventionandManagementofPressureUlcersinPeoplewithSCI.pdf" target="_blank" rel="noopener noreferer">Canadian Best
    Practice Guidelines for the Prevention and Management of Pressure Ulcers in People with Spinal Cord Injury</a>
    <p> Houghton et al., 2013)</p>
    <a href="https://www.nature.com/articles/sc201690" target="_blank" rel="noopener noreferer">The CanPain SCI Clinical Practice Guidelines for Rehabilitation Management of Neuropathic Pain after Spinal Cord: Recommendations for treatment</a>
    <p>(Guy et al. 2016)</p>    
    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6241225/" target="_blank" rel="noopener noreferer">Identification and Management of Cardiometabolic Risk after Spinal Cord Injury: Clinical Practice Guideline for Health Care Providers</a>
    <p>(Nash et al., 2018)</a>`;
    console.log("SCI selected");
  } else if (condition === "ms") {
    result.innerHTML = `<a href="https://www.nice.org.uk/guidance/ng220/chapter/Recommendations#ms-symptom-management-and-rehabilitation" target="_blank" rel="noopener noreferer">Multiple Sclerosis in adults: management</a>
    <p>(National Institute for Health Care Excellence, 2022)</p>
    <a href="https://rehabnurse.org/uploads/about/cpgms.pdf" target="_blank" rel="noopener noreferer">Nursing Management of the Patient with Multiple Scleorisis</a>
    <p>(Barret et al, 2011)<br><em>Physiotherapy relevant information p33-34</em></p>`;

    console.log("MS selected");
  } else if (condition === "cp") {
    result.innerHTML = `<a href="https://onlinelibrary.wiley.com/doi/10.1111/dmcn.15055" target="_blank" rel="noopener noreferer">Interventions to improve physical function for children and young people with cerebral palsy: international clinical practice guideline - 2021</a>
    <p>(Jackman et al., 2019)</p>
    <a href="https://www.nice.org.uk/guidance/ng62" target="_blank" rel="noopener noreferer">Cerebral Palsy in Under 25s: assessment and management</a>
    <p>(National Institute for Health Care Excellence, 2017)</p>
    <a href="https://www.nice.org.uk/guidance/ng119" target="_blank" rel="noopener noreferer"> Cerebral Palsy in Under Adults</a>
    <p>(National Institute for Health Care Excellence, 2019)</p>
    <a href="https://search.pedro.org.au/search-results/record-detail/56962" target="_blank" rel="noopener noreferer">Evidence-Based Clinical Care Guideline for Physical Therapy Management of
    Single Event Multi-Level Surgeries for Children, Adolescents, and Young Adults with Cerebral Palsy or Other Similar Neuromotor Conditions</a>
    <p>(Colvin et al., 2019)</p>`;

    console.log("CP selected");
  } else if (condition === "cva") {
    result.innerHTML = ` <a href="https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management" target="_blank" rel="noopener noreferer">Living Clinical Guidelines for Stroke Management</a>
    <p>(Stroke Foundation, 2024)</p>
    <a href="https://www.strokebestpractices.ca/recommendations" target="_blank" rel="noopener noreferer">Canadian Stroke Best Practices</a>
    <p>(Heart and Stroke Foundation of Canada, 2024)</p>
    <a href="https://www.nice.org.uk/guidance/ng236" target="_blank" rel="noopener noreferer">Stroke Rehabilitation in Adults</a>
    <p>(National Institute for Health Care Excellence, 2023)</p>
    <a href="http://www.ebrsr.com/" target="_blank" rel="noopener noreferer">Evidence-Based Review of Stroke Rehabilitation</a>
    <p>(Teasell et al., 2022)</p>
    <a href="https://e-bnr.org/DOIx.php?id=10.12786/bn.2023.16.e18" target="_blank" rel="noopener noreferer">Clinical Practice Guideline for Stroke Rehabilitation in Korea—Part 1: Rehabilitation for Motor Function (2022)</a>
    <p>(Kim et al., 2022)</p>
    <a href="https://www.nice.org.uk/guidance/ng128/chapter/Recommendations#optimal-positioning-and-early-mobilisation-for-people-with-acute-stroke" target="_blank" rel="noopener noreferer">Stroke and transient ischaemic attack in over 16s: diagnosis and initial management 2019</a>
    <p>(National Institute for Health Care Excellence, 2022)</p>    
    <a href="https://www.scielo.br/j/anp/a/b9Ngcfck3z8fgpmP75pq6Wr/?lang=en" target="_blank" rel="noopener noreferer">Brazilian Academy of Neurology practice guidelines for stroke rehabilitation: part I</a>
    <p>(Minelli et al., 2022)</p>
    <a href="https://journals.lww.com/jnpt/fulltext/2020/01000/clinical_practice_guideline_to_improve_locomotor.8.aspx" target="_blank" rel="noopener noreferer">Clinical Practice Guideline to Improve Locomotor Function Following Chronic Stroke, Incomplete Spinal Cord Injury, and Brain Injury</a>
    <p>(Hornby et at al, 2020)</p>
    <a href="https://www.healthquality.va.gov/guidelines/Rehab/stroke/VADoDStrokeRehabCPGFinal8292019.pdf" target="_blank" rel="noopener noreferer">VA/DoD Clinical Practice Guideline For the Management of Stroke Rehabilitation</a>
    <p>(Department of Veterans Affairs/Department of Defense, 2019)</p>
    <a href="https://www.ahajournals.org/doi/10.1161/STR.0000000000000407" target="_blank" rel="noopener noreferer">2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage: A Guideline From the American Heart Association/American Stroke Association</a>
    <p>(Greenberg et al, 2022)<br><em>Physiotherapy relevant information Section 8</em></p>
    <a href="https://journals.lww.com/jnpt/fulltext/2021/04000/a_clinical_practice_guideline_for_the_use_of.6.aspx" target="_blank" rel="noopener noreferer">A Clinical Practice Guideline for the Use of Ankle-Foot Orthoses and Functional Electrical Stimulation Post-Stroke</a>
    <p>(Johnston et al., 2021)</p>
    <a href="https://www.ahajournals.org/doi/10.1161/STR.0000000000000375" target="_blank" rel="noopener noreferer">2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack: A Guideline From the American Heart Association/American Stroke Association</a>
    <p>(Kleindorfer at al., 2021)</p>
    <a href="https://www.mcri.edu.au/images/documents/migrate/subacute_rehabilitation_of_childhood_stroke_clinical_guidelines.pdf" target="_blank" rel="noopener noreferer">The Subacute
    Rehabilitation of Childhood Stroke - Clinical Guideline 2019</a><p>Victorian Subacute Childhood Stroke Advisory Committee, 2019).</p>
    <a href="https://www.kngf.nl/binaries/content/assets/kennisplatform/onbeveiligd/guidelines/stroke_practice_guidelines_2014.pdf" target="_blank" rel="noopener noreferer">KNGF Guideline Stroke</a>
    <p>(Royal Dutch Society for Physical Therapy, 2014)</p>
    <a href="https://collections.nlm.nih.gov/catalog/nlm:nlmuid-101609293-pdf" target="_blank" rel="noopener noreferer">Management of patients with stroke: rehabilitation, prevention and management of complications, and discharge planning : a national (Scotland) clinical guideline</a>
    <p>(cottish Intercollegiate Guidelines Network, 2010)</p>
    <a href="https://www.health.govt.nz/publication/new-zealand-clinical-guidelines-stroke-management-2010" target="_blank" rel="noopener noreferer">New Zealand Clinical Guidelines for Stroke Management 2010</a>
    <p>(Stroke Foundation of New Zealand and New Zealand Guidelines Group, 2010)</p>`;
    console.log("CVA selected");
  } else if (condition === "pd") {
    result.innerHTML = `<a href="https://www.nice.org.uk/guidance/ng71" target="_blank" rel="noopener noreferer">Parkinson's disease in adults</a>
    <p>(National Institute for Health and Care Excellence, 2017)</p>`;
    console.log("PD selected");
  }
};

//https://pva.org/research-resources/publications/clinical-practice-guidelines/
//<a href="https://www.nationalmssociety.org/NationalMSSociety/media/MSNationalFiles/Brochures/Clinical_Bulletin_Physical-Therapy-in-MS-Rehabilitation.pdf" target="_blank" rel="noopener noreferer">Physical Therapy in Multiple
//Sclerosis 2018</a>
//https://www.neuropt.org/docs/ms-edge-documents/final-ms-edge-document.pdf?sfvrsn=913a970b_4
//https://uems-prm.eu/main-ms-rehabilitation-guidelines/
//https://www.mscare.org/page/practice_guidelines
//<a href="" target="_blank" rel="noopener noreferer">Australian CVA Clinical Practice Guidelines *YEAR*</a>
//<a href="https://actt.albertadoctors.org/media/hcgjedss/depression-in-ms-cpg.pdf" target="_blank" rel="noopener noreferer">Identification and management of depression in Multiple Sclerosis Clinical Practice Guideline</a>
    //<p>2015 - Toward Optimized Practice<br><span>Physiotherapy relevant information p3</span>

