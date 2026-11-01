import { ManuscriptPage, TocEntry } from '../types/book';

export const BOOK_METADATA = {
  title: 'THE AETHERIS INTEGRATED FORENSIC METHODOLOGY',
  subtitle: 'Golden Report + Mindprint + Ask Intros | Organizational Evidence, Human Relationships, Financial Exposure, Intervention and Verified Outcomes',
  coverTagline: 'MEASURING FINANCIAL LOSS THROUGH ORGANIZATIONAL SYSTEMS, HUMAN DECISION ARCHITECTURE, AND EVIDENCE-BASED RECOVERY',
  author: 'Joseph Toney',
  authorRole: 'Founder, Aetheris Technology',
  date: 'November 1, 2026',
  edition: 'Expanded Research Manuscript · Version 2.0 · November 2026',
  totalPages: 69,
  coverImageUrl: '/assets/aistudio/6393ce54-5ff6-4df1-abac-c1886f956b9f_f6c5408f.png',
  pdfUrl: '/assets/aistudio/Aetheris_Three_System_Forensic_Methodology_b4e84bed.pdf',
  stats: [
    { value: '1,910', label: 'Golden Reports' },
    { value: '1,067', label: 'Companies' },
    { value: '22,282', label: 'Indexed Findings' },
    { value: '701', label: 'Patterns' },
    { value: '339', label: 'Co-occurring Pairs' },
  ],
};

export const TABLE_OF_CONTENTS: TocEntry[] = [
  { id: 'title', title: 'Title & Evidence Classification', part: 'Front Matter', pageNumber: 1 },
  { id: 'abstract', title: 'Abstract & Keywords', part: 'Front Matter', pageNumber: 2 },
  { id: 'readers-guide', title: 'Reader’s Guide: Evidence Conventions', part: 'Front Matter', pageNumber: 3 },
  { id: 'ch1', title: '1. Introduction: Financial Loss as a Whole-Organization Event', part: 'Part I', pageNumber: 3 },
  { id: 'ch2', title: '2. Intellectual Foundations and Testable Mechanisms', part: 'Part I', pageNumber: 5 },
  { id: 'ch3', title: '3. Primary Materials and Recorded Research Corpus', part: 'Part I', pageNumber: 6 },
  { id: 'ch4', title: '4. Golden Report: From Public Signals to Source-Linked Findings', part: 'Part I', pageNumber: 8 },
  { id: 'ch5', title: '5. Canonical Financial Leak Ledger, Model Version 6', part: 'Part I', pageNumber: 9 },
  { id: 'ch6', title: '6. Mindprint: A Source-Constrained Model of Professional Evidence', part: 'Part I', pageNumber: 12 },
  { id: 'ch7', title: '7. Integration: From Two Diagnostic Instruments to One Method', part: 'Part I', pageNumber: 15 },
  { id: 'ch8', title: '8. The Seven-Phase Forensic Operating Protocol', part: 'Part I', pageNumber: 16 },
  { id: 'ch9', title: '9. Financial Measurement System and Equation Library', part: 'Part I', pageNumber: 18 },
  { id: 'ch10', title: '10. Complete Numerical Case: Four Mechanisms, Four Treatments', part: 'Part I', pageNumber: 20 },
  { id: 'ch11', title: '11. Recovery Intervention Design and Operating Economics', part: 'Part I', pageNumber: 26 },
  { id: 'ch12', title: '12. What Externally Published Cases Can Contribute', part: 'Part I', pageNumber: 28 },
  { id: 'ch13', title: '13. Statistical Science of the Collective Brain', part: 'Part I', pageNumber: 29 },
  { id: 'ch14', title: '14. Measurement Error, Confidence, and Model Calibration', part: 'Part I', pageNumber: 30 },
  { id: 'ch15', title: '15. Prospective Scientific Validation Study', part: 'Part I', pageNumber: 32 },
  { id: 'ch16', title: '16. Governance: Humans, Privacy, Security, and Fairness', part: 'Part I', pageNumber: 34 },
  { id: 'ch17', title: '17. Technical Quality Gates and Implementation Boundaries', part: 'Part I', pageNumber: 35 },
  { id: 'ch18', title: '18. Scientific Interpretation and Practical Implications', part: 'Part I', pageNumber: 36 },
  { id: 'ch19', title: '19. Findings on the First Two Instruments & Transition', part: 'Part I', pageNumber: 37 },
  { id: 'part2', title: 'Part II. Ask Intros as the Relationship Intervention Layer', part: 'Part II', pageNumber: 38 },
  { id: 'ch20', title: '20. The Missing Third Instrument: Relationship Execution', part: 'Part II', pageNumber: 38 },
  { id: 'ch21', title: '21. The Scientific Foundations of Relationship Forensics', part: 'Part II', pageNumber: 39 },
  { id: 'ch22', title: '22. Ask Intros’ Actual Five-Stage Operating Method', part: 'Part II', pageNumber: 41 },
  { id: 'ch23', title: '23. Exact Relationship Ranking Mathematics in Ask Intros', part: 'Part II', pageNumber: 42 },
  { id: 'ch24', title: '24. Consent-Aware Opportunity Readiness & Compatibility', part: 'Part II', pageNumber: 44 },
  { id: 'ch25', title: '25. Actual Revenue Diagnosis in Ask Intros', part: 'Part II', pageNumber: 45 },
  { id: 'ch26', title: '26. Intervention Selection: From Cause Chain to Approved Action', part: 'Part II', pageNumber: 46 },
  { id: 'ch27', title: '27. Relationship Routing, Referrals, and the Science of Timing', part: 'Part II', pageNumber: 47 },
  { id: 'ch28', title: '28. Mindprint Inside Ask Intros: Exact Evidence Boundary', part: 'Part II', pageNumber: 48 },
  { id: 'ch29', title: '29. Butler and Meetings: Conversation to Reproducible Evidence', part: 'Part II', pageNumber: 48 },
  { id: 'ch30', title: '30. Introduction Outcome Science: Beyond Counting Connections', part: 'Part II', pageNumber: 49 },
  { id: 'ch31', title: '31. Relationship Economics: How a Connection Becomes Value', part: 'Part II', pageNumber: 51 },
  { id: 'ch32', title: '32. A Complete Synthetic AIFM + Ask Intros Investigation', part: 'Part II', pageNumber: 52 },
  { id: 'ch33', title: '33. Time Savings, Operational Capacity and Network Value', part: 'Part II', pageNumber: 54 },
  { id: 'ch34', title: '34. Research Design: Does Ask Intros Add Incremental Value?', part: 'Part II', pageNumber: 54 },
  { id: 'ch35', title: '35. Implementation Reality and Critical Integration Boundaries', part: 'Part II', pageNumber: 56 },
  { id: 'ch36', title: '36. Extended Scientific Conclusions', part: 'Part II', pageNumber: 57 },
  { id: 'app-a', title: 'Appendix A. Minimum Research Data Dictionary', part: 'Appendices', pageNumber: 59 },
  { id: 'app-b', title: 'Appendix B. Reporting Standards for Every Dollar Figure', part: 'Appendices', pageNumber: 60 },
  { id: 'app-c', title: 'Appendix C. Example Audit-Ready Recovery Register', part: 'Appendices', pageNumber: 60 },
  { id: 'app-d', title: 'Appendix D. Reproducible Analytical Pseudocode & SQL', part: 'Appendices', pageNumber: 61 },
  { id: 'app-e', title: 'Appendix E. Model Failure Modes and Controls', part: 'Appendices', pageNumber: 62 },
  { id: 'app-f', title: 'Appendix F. Technical Primary Sources [T1–T19]', part: 'Appendices', pageNumber: 63 },
  { id: 'app-g', title: 'Appendix G. Cross-System Economic Event Contract', part: 'Appendices', pageNumber: 65 },
  { id: 'app-h', title: 'Appendix H. Replication Checklist for Forensic Study', part: 'Appendices', pageNumber: 65 },
  { id: 'refs', title: 'References: Ask Intros [B1–B23] & Scholarship [R1–R18]', part: 'Appendices', pageNumber: 67 },
];

const HEADER = 'AETHERIS TECHNOLOGY | THREE-SYSTEM FORENSIC METHODOLOGY';

export const MANUSCRIPT_PAGES: ManuscriptPage[] = [
  {
    pageNumber: 1,
    partLabel: 'Front Matter',
    chapterTitle: 'Title & Classification',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'heading1',
        text: 'AETHERIS INTEGRATED FORENSIC METHODOLOGY',
        subtitle: 'Golden Report + Mindprint + Ask Intros | Organizational Evidence, Human Relationships, Financial Exposure, Intervention and Verified Outcomes',
      },
      {
        type: 'metadata',
        items: [
          'Joseph Toney | Founder, Aetheris Technology',
          'November 1, 2026',
          'EXPANDED RESEARCH MANUSCRIPT | VERSION 2.0 | NOVEMBER 2026',
        ],
      },
      {
        type: 'callout',
        text: 'Proposed publication classification: Methodological framework and technical evidence audit, with financial measurement protocol and prospective validation design.',
      },
      {
        type: 'paragraph',
        text: 'Systems under investigation: Aetheris Golden Report, Financial Leak Ledger Version 6, Golden Report Collective Brain, Mindprint Intelligence, and Ask Intros Relationship Intelligence OS.',
      },
      {
        type: 'paragraph',
        text: 'Evidence status: The manuscript includes implementation-verified software structure, a documented production count snapshot, one supplied Mindprint report, externally published research, and explicitly synthetic numerical examples. It does not claim independent access to the protected production financial transactions or independently confirmed recoveries for all indexed reports.',
      },
    ],
  },
  {
    pageNumber: 2,
    partLabel: 'Front Matter',
    chapterTitle: 'Abstract',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: 'Abstract' },
      {
        type: 'paragraph',
        text: 'Background. Traditional business audits often examine revenue, marketing, processes, technology, and employee behavior separately. Financial consequences may instead emerge at the interfaces between otherwise functioning subsystems: incomplete handoffs, incompatible definitions of a qualified opportunity, ambiguous decision authority, fragmented records, or process variation. Isolated findings may describe symptoms while failing to identify the organizational mechanism that produces them.',
      },
      {
        type: 'paragraph',
        text: 'Objective. To formalize the Aetheris Integrated Forensic Methodology (AIFM), developed by Joseph Toney, as a reproducible framework for detecting organizational friction, linking business evidence to authorized professional communication and verified work relationships, deriving defensible monetary ranges, selecting corrective interventions, and measuring attributable recovery.',
      },
      {
        type: 'paragraph',
        text: 'Materials and methods. Primary materials include the Ask Intros relationship scoring, personal Mindprint, financial diagnosis, introduction outcome, meeting, and privacy architecture, alongside the Aetheris Golden Report source code, canonical financial ledger, report compiler, Collective Brain aggregation logic, the recorded October 29, 2026 production snapshot, the Mindprint evidence graph and company-integration code, and a supplied 21-page Mindprint report dated October 30, 2026. A technical audit separates source records, software behavior, model estimates, outcome validation, and causal claims. Theoretical foundations draw on organizational information processing, sociotechnical design, process mining, organizational networks, and causal inference. [T1-T19, R1-R11]',
      },
      {
        type: 'paragraph',
        text: 'Results. The production engineering record reports 1,910 Golden Reports from 1,067 companies with 22,282 indexed findings, 701 aggregated patterns, and 339 co-occurring pattern pairs. This yields 11.67 indexed findings per report and 1.79 reports per company on average. These are corpus descriptors, not independent failure counts or recovered dollars. The canonical financial ledger prevents arithmetic double counting through chapter ownership, root-cause fingerprints, excluded summary sections, deterministic totals, and reconciliation invariants. Mindprint’s graph retains attributed evidence, contradictory records, organizational connections, decisions, and outcomes, but imports Golden Report findings as hypotheses rather than proven facts. A synthetic four-mechanism case demonstrates $799,000 in mixed economic exposure, $440,000 in modeled incremental sales, $39,000 in avoided expense, and $55,000 in collected receivables. Under an accrual-accounting interpretation excluding receivable collections from earnings, the modeled contribution benefit is $193,000 before $85,000 in implementation costs; net economic benefit is $108,000 (127.1% ROI). [T1-T8, T14-T19]',
      },
      {
        type: 'paragraph',
        text: 'Conclusion. AIFM has a substantive implemented forensic architecture connecting organizational assessment, professional evidence, relationship matching and approval-gated actions with a measurable outcome framework. The unresolved empirical questions are whether Mindprint improves root-cause accuracy over Golden Report alone, and whether Ask Intros adds measurable intervention execution and outcome value beyond both diagnostic systems. The proposed protocol makes that claim falsifiable rather than assumed.',
      },
      {
        type: 'callout',
        text: 'Keywords: Ask Intros; relationship intelligence; introduction outcomes; reciprocal value; consent; revenue forensics; financial leakage; organizational design; information processing; decision architecture; Mindprint; Golden Report; event logs; evidence graphs; process mining; causal identification; intervention evaluation; return on investment.',
      },
    ],
  },
  {
    pageNumber: 3,
    partLabel: 'Part I',
    chapterTitle: 'Reader’s Guide & 1. Introduction',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: 'Reader’s Guide: What the Evidence Can and Cannot Establish' },
      {
        type: 'paragraph',
        text: 'A peer-review-ready study must distinguish evidence of a software function from evidence of a business result. The following reporting convention applies throughout this manuscript.',
      },
      {
        type: 'table',
        headers: ['Code', 'Evidence classification', 'Permissible statement'],
        rows: [
          ['D', 'Directly documented system artifact', 'A described source file, report, or calculation rule exists in the reviewed material.'],
          ['E', 'Engineering-tested behavior', 'A repository test or engineering log documents expected or observed software behavior.'],
          ['C', 'Corpus-level production record', 'A dated production record reports numbers of reports, findings, patterns, or firms.'],
          ['X', 'Externally reported case', 'An outside organization or publisher reports an outcome; not evidence of an Aetheris customer result.'],
          ['S', 'Synthetic financial scenario', 'Transparent numerical assumptions illustrate calculations, not actual recovered dollars.'],
          ['V', 'Independently validated business result', 'Requires source transaction records, reproducible calculations, and appropriate verification.'],
        ],
      },
      {
        type: 'paragraph',
        text: 'The October 29 report counts are C. The Golden Report ledger code is D. Its repository regression fixtures are E. The worked business example is S. Unbounce and McKinsey examples are X. No real-company V recovery amount is asserted merely because an Aetheris report lists a dollar value.',
      },
      {
        type: 'figure',
        figureType: 'architecture',
        caption: 'Figure 1. Integrated Aetheris evidence architecture. Solid flow represents investigative sequence, not established causation.',
      },
      { type: 'heading1', text: '1. Introduction: Financial Loss as a Whole-Organization Event' },
      { type: 'heading2', text: '1.1 Why conventional audits can be correct yet incomplete' },
      {
        type: 'paragraph',
        text: 'A typical organization operates through interdependent functions. Marketing generates interest; sales classifies and pursues opportunities; operations delivers the promised service; finance invoices and',
      },
    ],
  },
  {
    pageNumber: 4,
    partLabel: 'Part I',
    chapterTitle: '1. Introduction: Financial Loss as a Whole-Organization Event',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'collects payment; technology stores records and controls workflow. Each department may satisfy local performance indicators while the complete value stream remains impaired. An advertising campaign may meet its cost-per-lead target while the qualified inquiries remain unassigned. An ERP may correctly record a completed job while a separate billing rule fails to generate an invoice. A CRM may contain the relevant fields but lack a universally accepted definition of what those fields mean.',
      },
      {
        type: 'paragraph',
        text: 'The diagnostic error is not necessarily an inaccurate departmental measure. It is the assumption that local compliance implies system-level effectiveness. AIFM examines how observed outcomes are generated by chains of transitions, constraints, and decisions. A finding is not fully explanatory until the investigator can show how evidence moves from the originating condition through the operational mechanism to the economic outcome.',
      },
      {
        type: 'paragraph',
        text: 'Galbraith’s information-processing theory explains why uncertainty and interdependence create greater coordination requirements [R1]. Sociotechnical research establishes that changes to technology and work organization cannot be evaluated independently [R2]. Media-richness research distinguishes absent information from ambiguity about the meaning of available information [R3]. These literatures support a systems-level inquiry; they do not validate any particular automated Aetheris inference.',
      },
      { type: 'heading2', text: '1.2 The founder’s forensic principle' },
      {
        type: 'paragraph',
        text: 'The methodological viewpoint developed by Joseph Toney is that a business should be examined as a network of dependent activities, not as a sequence of software products to sell. The sequence is: identify the loss, trace the chain, establish the causes supported by the evidence, evaluate how human coordination may sustain the failure, correct the relevant mechanism, and re-measure the economic consequence. Technology is an instrument for diagnosis or correction, not the default explanation.',
      },
      {
        type: 'callout',
        text: 'Empirical Hypothesis: An operational diagnosis informed by independent evidence about organizational relationships and decision practices will, under specified circumstances, be more accurate and economically useful than an operational diagnosis that omits that evidence.',
      },
      { type: 'heading2', text: '1.3 Formal research objectives' },
      {
        type: 'paragraph',
        text: 'The proposed framework is designed to: (a) detect observable defects and ambiguities in operations; (b) trace each claim to source data; (c) distinguish symptoms, mechanisms, and candidate root causes; (d) map verified work relationships and communication requirements; (e) produce one reconciled economic account for each distinct loss mechanism; (f) intervene against a validated mechanism; and (g) measure the outcome using comparable pre- and post-intervention records, preferably with a credible control or counterfactual.',
      },
      { type: 'heading2', text: '1.4 Unit of analysis and causal caution' },
      {
        type: 'paragraph',
        text: 'Five units of analysis must remain separate: the scan (an assessment run), the company (an organization with possible repeated scans), the finding (an indexed statement), the mechanism (a hypothesized process generating a finding), and the economic event (a sale, hour, invoice, or cost',
      },
    ],
  },
  {
    pageNumber: 5,
    partLabel: 'Part I',
    chapterTitle: '2. Intellectual Foundations and Testable Mechanisms',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'recorded once). A count of findings is not a count of independent failures. A repeated finding is not necessarily a repeated loss. Multiple supporting statements are not independent measurements if they originate from one source.',
      },
      { type: 'heading1', text: '2. Intellectual Foundations and Testable Mechanisms' },
      { type: 'heading2', text: '2.1 Organizational information processing' },
      {
        type: 'paragraph',
        text: 'Galbraith argues that rising task uncertainty increases an organization’s information-processing demand [R1]. If the demand exceeds available coordination capacity, errors and delays may become more frequent. Within AIFM, the operational expression of this hypothesis is a mismatch between (1) the information required for a decision and (2) the information delivered by the preceding process. The measurable consequences can include repeated clarification requests, delayed stage transitions, rejected handoffs, additional cycle time, and, where documented, lost transactions.',
      },
      {
        type: 'paragraph',
        text: 'This suggests a research variable rather than a personality label: information requirement mismatch, measured as the proportion of sampled handoffs failing a predefined field-completeness or acceptance standard. The denominator must be all eligible handoffs within the same time window, not a selective sample of problematic cases.',
      },
      { type: 'heading2', text: '2.2 Sociotechnical interdependence' },
      {
        type: 'paragraph',
        text: 'Trist and Bamforth demonstrated the importance of examining work organization with the technology through which work is performed [R2]. A CRM routing configuration can be technically correct while organizational ownership rules remain unclear. Conversely, a clear managerial instruction may fail because required data are unavailable at the moment of action. AIFM therefore treats technical and human hypotheses as potentially interacting rather than competing for a single narrative explanation.',
      },
      { type: 'heading2', text: '2.3 Information ambiguity versus information shortage' },
      {
        type: 'paragraph',
        text: 'Daft and Lengel distinguish uncertainty from equivocality, where different actors interpret the same data differently [R3]. This distinction maps directly to the Golden Report / Mindprint integration. The Golden Report may identify incomplete lead acceptance. Mindprint and confirmed workflow evidence may support an investigation into whether the disagreement concerns missing fields, inconsistent meanings, authority, or prioritization. No conclusion about private motives is required.',
      },
      { type: 'heading2', text: '2.4 Process mining and conformance' },
      {
        type: 'paragraph',
        text: 'Process mining reconstructs actual process behavior from events, case identifiers, and timestamps [R4]. In AIFM, an event-log record should retain case_id, activity, event_time, actor_role, system, and status. Event traces reveal whether a case followed the intended path, skipped an approval, cycled between teams, or stalled at a transition. Golden Report can suggest where to look; authorized operational logs establish what happened.',
      },
      { type: 'heading2', text: '2.5 Organizational network analysis' },
      {
        type: 'paragraph',
        text: 'Cross, Borgatti, and Parker show the value of examining actual information-sharing networks rather than formal reporting lines alone [R5]. Within AIFM, network relationships should be derived from confirmed responsibilities, documented handoffs, or appropriately authorized organizational evidence.',
      },
    ],
  },
  {
    pageNumber: 6,
    partLabel: 'Part I',
    chapterTitle: '3. Primary Materials and Recorded Research Corpus',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'A dense network is not automatically effective, and a sparse network is not automatically defective. Each relationship must be evaluated relative to the work being accomplished.',
      },
      { type: 'heading2', text: '2.6 Team learning and open correction' },
      {
        type: 'paragraph',
        text: 'Edmondson’s field study links psychological safety with team learning behavior and performance in organizational contexts [R6]. This supports attention to whether employees can report process failures, challenge ambiguous instructions, and correct defects. It does not justify determining the psychological safety of a company from a LinkedIn profile or assigning financial costs to an inferred personality trait.',
      },
      { type: 'heading2', text: '2.7 Counterfactual inference' },
      {
        type: 'paragraph',
        text: 'Pearl’s framework and Hernan and Robins’s treatment of causal inference require explicit assumptions before observational relationships can be interpreted as intervention effects [R7, R8]. AIFM therefore distinguishes an explanatory graph from a causal graph. An edge indicating that two roles communicate is descriptive; an arrow claiming that a communication rule changed conversion requires intervention-oriented evidence. Difference-in-differences, randomized trials, interrupted time series, and target-trial emulation are possible validation approaches when their assumptions hold [R8, R9].',
      },
      { type: 'heading1', text: '3. Primary Materials and Recorded Research Corpus' },
      { type: 'heading2', text: '3.1 Source hierarchy' },
      {
        type: 'paragraph',
        text: 'The primary technical corpus includes the Golden Report canonical ledger [T3], compiler [T4], generic-report detector [T5], money taxonomy [T6], archive model [T7], regression tests [T8], Collective Brain SQL [T2] and engineering roadmap [T1]. The human layer includes Mindprint’s evidence graph [T14], Golden Report import [T15], workflow import [T16], graph composition [T17], engineering roadmap [T18], and the supplied 21-page example report [T19]. The public X-Ray specification [T10] and Aetheris methodology generator [T11] clarify how the self-assessment differs from an operator-verified financial investigation.',
      },
      {
        type: 'paragraph',
        text: 'For reproducibility, source references cite the reviewed repository paths and, where available, a pinned commit. The installed tools permitted inspection of code and documentation but did not provide an independently authenticated export of the production financial transaction tables. The manuscript accordingly does not calculate real-company aggregate recovery from inaccessible records.',
      },
    ],
  },
  {
    pageNumber: 7,
    partLabel: 'Part I',
    chapterTitle: '3. Primary Materials and Recorded Research Corpus',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '3.2 Production corpus: the recorded snapshot' },
      {
        type: 'figure',
        figureType: 'corpus',
        caption: 'Figure 2. Recorded Golden Report corpus (Oct 29, 2026): 1,910 Golden Reports · 1,067 Companies · 22,282 Indexed Findings · 701 Pattern Records · 339 Co-occurring Pairs.',
      },
      {
        type: 'paragraph',
        text: 'The production roadmap records 1,910 reports, 1,067 represented companies, 22,282 findings, 701 pattern records, and 339 co-occurrence pairs [T1]. These figures imply:',
      },
      {
        type: 'equation',
        text: 'f̂ = 22,282 / 1,910 = 11.67 indexed findings / report     |     ŝ = 1,910 / 1,067 = 1.79 reports / company',
      },
      {
        type: 'paragraph',
        text: 'The first quantity is not a frequency of independently verified business failures. The second quantity makes clear that some represented companies have multiple reports. For prevalence studies, repeated reports should be identified and either modeled longitudinally or reduced to one report per organization under an explicitly stated rule.',
      },
      { type: 'heading2', text: '3.3 The structure of repeated-pattern evidence' },
      {
        type: 'paragraph',
        text: 'The Collective Brain migration generates tables for individual normalized patterns, co-occurring pattern pairs, industry-specific pattern frequencies, and corpus state [T2]. It stores report_count, occurrence_count, company_count, report_share, available evidence grades, and dates. A pair enters the co-occurrence table when it appears together in at least three reports. This threshold is a screening rule, not a statistical significance test.',
      },
      {
        type: 'paragraph',
        text: 'The system’s 701 pattern records are grouping keys, not necessarily 701 scientifically independent failure mechanisms. Differences in labels, synonyms, extraction prompts, and root-cause normalization may fragment one real mechanism into multiple keys. Before estimating true prevalence, investigators should conduct ontology review, synonym consolidation, adjudication, and stability checks across model versions.',
      },
      { type: 'heading2', text: '3.4 What the present record does not reveal' },
      {
        type: 'paragraph',
        text: 'The snapshot does not include a published cross-tabulation of the leading pattern names, their per-company counts, actual company revenue bands, transaction-level exposure, post-intervention outcomes, or Mindprint match frequencies. It is therefore not possible to assert that a specified fraction of companies had a particular financial leak, or that Golden Report combined with Mindprint has already',
      },
    ],
  },
  {
    pageNumber: 8,
    partLabel: 'Part I',
    chapterTitle: '4. Golden Report: From Public Signals to Source-Linked Findings',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'recovered a specified aggregate dollar amount. This is a precise boundary on the claim, not a weakness to disguise with benchmark numbers.',
      },
      { type: 'heading2', text: '3.5 External case-study library provenance' },
      {
        type: 'paragraph',
        text: 'The Aetheris website repository includes a collection of fifty externally sourced case-study summaries, plus a separate file assigning dollar recovery labels to cases [T12, T13]. The source material mixes external vendors’ outcome claims, commentary, and Aetheris-mapped intervention analogies. For example, an externally sourced lead-scoring summary describes conversion moving from 25% to 40%, while its separate recovery file assigns $680,000. Without the underlying eligible lead count, realized deal value, attribution rule, and transaction source for $680,000, the amount cannot be independently reconstructed. It must not be presented as an audited Aetheris recovery.',
      },
      {
        type: 'callout',
        text: 'Recovery Provenance Gate: No externally quoted case amount is assigned verification class V until the supporting financial source and period are attached, independently reviewed, and shown to reconcile.',
      },
      { type: 'heading1', text: '4. Golden Report: From Public Signals to Source-Linked Findings' },
      { type: 'heading2', text: '4.1 Distinct assessment modes' },
      {
        type: 'paragraph',
        text: 'The public Aetheris Leak Check is a fourteen-question directional self-assessment across lead capture, response and follow-up, operational drag, and trust/conversion. It can model exposure based on user-provided answers and revenue bands; its own service description does not claim that this is verified recovered money [T9, T11]. The standalone Business X-Ray similarly identifies inputs as self-reported, estimated, or verified; its documented free browser mode produces no verified items and reports missing information rather than inventing values [T10].',
      },
      {
        type: 'paragraph',
        text: 'The private or operator-led Golden Report has a different evidentiary role: it gathers company-specific artifacts, compiles findings, links claims to sources, and builds a canonical financial representation. A website URL is a legitimate intake point, not blanket permission to infer internal staffing, CRM history, margins, or leadership behavior.',
      },
      { type: 'heading2', text: '4.2 The compiler’s evidence model' },
      {
        type: 'paragraph',
        text: 'The Golden Report compiler defines claim statuses verified, inferred, unverified, and contradicted, with fields for claim ID, category, normalized fact, confidence, source kind, URL, source locator, time observed, verification method, and limitations [T4]. The source kinds include raw HTML, rendered DOM, browser test, structured API, markdown, database, and user input. A compiled finding references supporting claim IDs and a proposed root-cause ID. A compiled priced leak may include calculation method, assumptions, source URL, confidence, and evidence references.',
      },
      {
        type: 'paragraph',
        text: 'These structures allow the investigator to ask what was observed, where, when, how, with what limitations, and with what financial implication? Their existence does not mean all generated claims have passed independent validation; it means the software has fields in which the necessary evidence can be represented.',
      },
    ],
  },
  {
    pageNumber: 9,
    partLabel: 'Part I',
    chapterTitle: '5. Canonical Financial Leak Ledger, Model Version 6',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'figure',
        figureType: 'progression',
        caption: 'Figure 3. Claim-strength progression: 01 Detected -> 02 Corroborated -> 03 Quantified -> 04 Tested -> 05 Realized.',
      },
      { type: 'heading2', text: '4.3 The generic-report rejection safeguard' },
      {
        type: 'paragraph',
        text: 'The Golden Report includes a detector for generic boilerplate, default benchmark ranges, and template phrasing. Its stated rule is that a company-specific financial claim must be grounded in observed evidence for that company [T5]. It can classify report states as compiled, needs review, or regeneration required. This addresses a genuine failure mode of automated audits: identical financial estimates applied to unrelated companies in the absence of observed denominators or relevant transaction data.',
      },
      { type: 'heading2', text: '4.4 The case archive and longitudinal identity' },
      {
        type: 'paragraph',
        text: 'The Golden Report library archives completed reports, associates them with company identities, preserves version history, and indexes normalized findings [T7]. Its summary includes annual low and high values, finding count, root-cause count, overall score where available, and report-state metadata. This supports comparing successive scans, provided analysts avoid interpreting a change in report wording or model version as a verified change in business conditions.',
      },
      {
        type: 'paragraph',
        text: 'For longitudinal validity, reports should retain stable company IDs, report timestamps, source hashes, financial model version, compiler version, and the set of observations available at each time point. Reprocessing old evidence under a new model is a model-change measurement, not necessarily an operational improvement.',
      },
      { type: 'heading1', text: '5. Canonical Financial Leak Ledger, Model Version 6' },
      { type: 'heading2', text: '5.1 Why a central ledger matters' },
      {
        type: 'paragraph',
        text: 'Without a single source of financial truth, the same lost opportunity may appear in a website chapter, a sales chapter, a CRM chapter, and a leadership chapter. Summing those presentations creates artificial revenue loss. The actual Golden Report ledger is explicitly designed to count one economic mechanism',
      },
    ],
  },
  {
    pageNumber: 10,
    partLabel: 'Part I',
    chapterTitle: '5. Canonical Financial Leak Ledger, Model Version 6',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'once [T3]. Browser views, PDFs, history, and summaries derive their amounts from the same ledger-facing calculation interface [T3, T8].',
      },
      {
        type: 'figure',
        figureType: 'ledger',
        caption: 'Figure 4. Deterministic ledger pipeline: Source claims -> Eligibility rules -> Deduplication -> Allocation -> Reconciliation.',
      },
      { type: 'heading2', text: '5.2 Financial-basis taxonomy' },
      {
        type: 'paragraph',
        text: 'The source code defines four bases: measured, evidence_based_model, illustrative_scenario, and not_evaluated. Only the first two can contribute to the headline estimated annual loss [T3]. Illustrative scenarios remain visible but are excluded from the total; findings without adequate evidence remain unpriced.',
      },
      {
        type: 'paragraph',
        text: 'The source code’s current financial-basis classification partly uses phrases and numbers in a pricing-basis string. For example, language identifying an observed or recorded value, combined with numerals, can receive the measured label. This is a useful automation heuristic but not sufficient on its own to prove a measurement. A research-grade upgrade requires verifying that source record IDs, units, dates, denominators, and actual values can be reproduced from read-only source records.',
      },
      { type: 'heading2', text: '5.3 Canonical inclusion and overlap rules' },
      {
        type: 'paragraph',
        text: 'The ledger follows a deterministic hierarchy [T3]: Gather eligible structured chapter amounts and individual priced findings. Exclude roll-up sections such as executive summaries, Top Ten, appendices, and remediation plans from being treated as fresh financial exposure. Allocate a priced finding to one primary chapter. Where no chapter amount controls, price active findings; normalize and deduplicate using root-cause fingerprints. Sum each distinct active entry exactly once. Reconcile the overall total with chapter allocations, Top Ten subtotal plus remainder, and duplication invariants.',
      },
      {
        type: 'paragraph',
        text: 'For a set of eligible, distinct economic mechanisms K, the general ledger identity is:',
      },
    ],
  },
  {
    pageNumber: 11,
    partLabel: 'Part I',
    chapterTitle: '5. Canonical Financial Leak Ledger, Model Version 6',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'equation',
        text: 'L_total^low = ∑_{k ∈ K} L_k^low ,     L_total^high = ∑_{k ∈ K} L_k^high',
      },
      {
        type: 'paragraph',
        text: 'This identity is arithmetically valid only when entries share a coherent economic basis and do not overlap. A financial accountant would not sum revenue, expense, receivables, and productive-capacity values into a homogeneous income-statement loss. The AIFM recovery register therefore retains separate economic categories even when a dashboard displays a mixed exposure inventory.',
      },
      { type: 'heading2', text: '5.4 Pricing sanity rules' },
      {
        type: 'paragraph',
        text: 'The reviewed ledger defines a maximum accepted single leak of $50 million, a maximum chapter amount of $10 million, and a total-report plausibility warning above $25 million [T3]. These are software guardrails and not validated industry-standard thresholds. A company-level reasonableness test must also use the company’s size, margins, volumes, sector, currency, and period.',
      },
      { type: 'heading2', text: '5.5 Reconciliation invariants' },
      {
        type: 'paragraph',
        text: 'Let A be the active ledger entries, C the primary chapter allocations, T the Top Ten, and R the remaining active entries. The system enforces:',
      },
      {
        type: 'equation',
        text: '∑_{i ∈ A} L_i = ∑_{c ∈ C} L_c     and     ∑_{i ∈ T} L_i + ∑_{i ∈ R} L_i = ∑_{i ∈ A} L_i',
      },
      {
        type: 'paragraph',
        text: 'And within the active set, each normalized root-cause identifier should appear at most once. The reconciliation implementation records mismatches and returns a failure state for hard violations; totals above the configured plausibility ceiling receive a warning [T3]. These checks establish internal arithmetic consistency, not causal validity.',
      },
      { type: 'heading2', text: '5.6 Actual engineering-test evidence' },
      {
        type: 'paragraph',
        text: 'The checked-in regression test file includes fixtures for parsing money-formatted values, handling invalid or missing inputs, normalizing reversed ranges, preventing duplicate entries, avoiding chapter double counting, and keeping displayed values consistent across surfaces [T8]. One arithmetic fixture yields a $250,000 to $500,000 calculated range from supplied strings. The synthetic fixture amounts must not be represented as amounts lost by real Aetheris clients.',
      },
    ],
  },
  {
    pageNumber: 12,
    partLabel: 'Part I',
    chapterTitle: '6. Mindprint: A Source-Constrained Model of Professional Evidence',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '5.7 Four different meanings of a dollar amount' },
      {
        type: 'paragraph',
        text: 'The financial presentation layer differentiates annual loss, source evidence, implementation investment, and recovery scenario [T6]. AIFM adds a fifth, audit-oriented distinction: realized outcome.',
      },
      {
        type: 'table',
        headers: ['Financial label', 'Example', 'Can it be treated as realized profit?'],
        rows: [
          ['Source amount', 'Public product price or an invoice value', 'No; it is an input.'],
          ['Estimated annual exposure', 'Modeled lost contribution at a failed handoff', 'No; model subject to assumptions.'],
          ['Implementation investment', 'Fixed project fee or operating cost', 'No; this is a cost.'],
          ['Recovery scenario', 'Estimated value from a future process correction', 'No; scenario not yet realized.'],
          ['Verified realized effect', 'Attributable incremental contribution or avoided expense', 'Potentially, after financial and causal validation.'],
        ],
      },
      {
        type: 'paragraph',
        text: 'AIFM should never allow an attractive projected recovery to masquerade as observed cash receipts. Conversely, collecting an already recognized receivable improves cash position but does not automatically create new income.',
      },
      { type: 'heading1', text: '6. Mindprint: A Source-Constrained Model of Professional Evidence' },
      { type: 'heading2', text: '6.1 Scope of the human analysis' },
      {
        type: 'paragraph',
        text: 'Mindprint examines professional communication evidence to generate provisional hypotheses about communication style, thinking-related language, trust signals, decision information requirements, and interactions with other people. It is not a psychometric test merely because it reports scores or potential behavioral dimensions. Its scientifically defensible role within AIFM is to generate evidence-linked questions about workplace coordination and to organize verified work relationships; it cannot directly determine internal motives, personality, professional competence, mental health, or employee suitability from public profiles.',
      },
      { type: 'heading2', text: '6.2 Actual processing stages observed in the supplied report' },
      {
        type: 'paragraph',
        text: 'The sample report records three text sources, seventeen normalized passages, eight extracted or rebuilt evidence signals, two source types, three areas with signals, and an overall Moderate evidence-confidence label of 50/100 [T19]. Its ten named stages are intake, normalization, signal extraction, pattern clustering, contradiction detection, confidence calculation, behavioral model creation, goal-specific strategy generation, meeting/conversation preparation, and saving the Mindprint.',
      },
    ],
  },
  {
    pageNumber: 13,
    partLabel: 'Part I',
    chapterTitle: '6. Mindprint: A Source-Constrained Model of Professional Evidence',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '6.3 Observed categories and unknowns' },
      {
        type: 'paragraph',
        text: 'The sample records evidence concerning communication, trust, and strategic thinking. It does not establish populated evidence for every nominal Mindprint dimension. Some sections explicitly identify risk, execution, relationship style, or buying signals as not observed. The report contains tentative language about decision emphasis but states that no actual decision example is available [T19].',
      },
      {
        type: 'callout',
        text: 'Conservative Evidentiary Rule: Missing observations must remain missing. The absence of a risk-related statement in a brief professional biography does not establish a low-risk or high-risk personality.',
      },
      { type: 'heading2', text: '6.4 Contradiction analysis' },
      {
        type: 'paragraph',
        text: 'Mindprint may flag potential differences between stated professional positions and other sampled communication. In the supplied example, the report records zero possible tensions for review while explicitly warning that zero flags do not prove consistency [T19]. For AIFM, contradiction detection is best applied to work requirements rather than personality verdicts: for example, the sales policy states that every quote has an owner, while timestamped CRM records show quotes lacking owners. This contradiction is operationally observable and can lead to a reproducible intervention.',
      },
      { type: 'heading2', text: '6.5 The implemented Mindprint company evidence graph' },
      {
        type: 'paragraph',
        text: 'The company data model recognizes four evidence kinds: golden_report, professional_text, operational_record, and verified_self_report [T14]. A finding has one of four statuses: hypothesis, corroborated, contradicted, or validated. Work links include reporting, approval, dependency, handoff, and collaboration relationships. Decision records preserve assumptions, alternatives, expected measures, and source IDs. Outcome records preserve baseline, actual measure, unit, decision ID, and observation date.',
      },
      {
        type: 'paragraph',
        text: 'The graph includes explicit checks for invalid organization identifiers, duplicated IDs, missing evidence, and confirmed links without supporting evidence. Voluntary private self-reports require a consent reference. Golden Report imports create hypothesis records rather than automatically setting them to validated [T14-T17].',
      },
    ],
  },
  {
    pageNumber: 14,
    partLabel: 'Part I',
    chapterTitle: '6. Mindprint: A Source-Constrained Model of Professional Evidence',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'figure',
        figureType: 'graph',
        caption: 'Figure 5. Illustrative company evidence graph using the implemented node classes (Site evidence, CRM timestamps -> Golden finding -> Sales/Marketing/Handoff roles -> Testable mechanism -> Measured outcome).',
      },
      { type: 'heading2', text: '6.6 No invented relationship edges' },
      {
        type: 'paragraph',
        text: 'The workflow-evidence module imports workplace links that were explicitly entered, checks that both endpoints exist within the workspace, and marks a connection confirmed only if the status and supporting source notes meet its rules [T16]. A title such as “Director of Marketing” is insufficient to infer who approves a budget, accepts a sales handoff, or causes an escalation delay. These relationships must be confirmed.',
      },
      {
        type: 'paragraph',
        text: 'AIFM should avoid treating inferred relationships as evidence of accountability. The correct output when a link is unknown is a request for a process map, system event, signed responsibility matrix, or verified stakeholder account.',
      },
      { type: 'heading2', text: '6.7 The limit of the present integration' },
      {
        type: 'paragraph',
        text: 'The relevant company graph implementation currently combines imported Golden Report findings and explicit workflow evidence with decision and outcome records [T17]. This is a real schema-level integration. It is not proof that every Golden Report observation is automatically causally linked to an individual’s Mindprint or that the combination has been externally validated.',
      },
      {
        type: 'paragraph',
        text: 'The methodological recommendation is therefore to preserve a human evidence hypothesis layer rather than convert language patterns into direct financial loss multipliers. If future research shows an independently reproducible relationship between a particular communication mismatch and operational outcome, only then should the model use that relationship quantitatively.',
      },
    ],
  },
  {
    pageNumber: 15,
    partLabel: 'Part I',
    chapterTitle: '7. Integration: From Two Diagnostic Instruments to One Method',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '7. Integration: From Two Diagnostic Instruments to One Investigative Method' },
      { type: 'heading2', text: '7.1 What exactly is integrated' },
      {
        type: 'paragraph',
        text: 'AIFM connects Golden Report’s structured organization-level claims, measured process or financial evidence, Mindprint’s source-linked professional observations, verified role links, intervention decisions, and observed outcomes. The result is a provenance-aware evidence graph, not a simple concatenation of two reports.',
      },
      {
        type: 'equation',
        text: 'G = (V, E)   where E ⊆ {supported_by, contradicted_by, performed_by, hands_off_to, depends_on, evaluated_by, observed_after}',
      },
      { type: 'heading2', text: '7.2 The hypothesis chain' },
      {
        type: 'metadata',
        items: [
          '1. Digital or process observation: A submitted inquiry has an incomplete response trace.',
          '2. Golden Report claim: The customer-to-sales handoff may be unreliable, based on the source record.',
          '3. Workflow evidence: A confirmed responsibility link identifies the handing-off and receiving roles.',
          '4. Mindprint contribution: Authorized professional text and direct stakeholder input suggest potentially different information requirements; they remain hypotheses.',
          '5. Mechanism test: CRM timestamps and qualification definitions show that a mandatory acceptance field has conflicting meanings across teams.',
          '6. Financial model: A defined subset of opportunities experiencing this mismatch is compared with a credible control population.',
          '7. Correction: The handoff schema, ownership rules, and escalation policy are changed.',
          '8. Verification: The same measurement definition is applied to the same eligible population after intervention.',
        ],
      },
      { type: 'heading2', text: '7.3 A mechanism need not be a person’s defect' },
      {
        type: 'paragraph',
        text: 'A recurring loss can be produced by a rational employee operating under a defective process. For example, a sales manager may decline a lead lacking essential fields because accepting it would worsen quality. Marketing may nevertheless be incentivized to deliver volume without those fields. Both actors can behave consistently with their assigned objectives; the system-level failure lies in incompatible rules and metrics. AIFM should prioritize structural correction over individualized blame.',
      },
    ],
  },
  {
    pageNumber: 16,
    partLabel: 'Part I',
    chapterTitle: '8. The Seven-Phase Forensic Operating Protocol',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '7.4 Distinguishing interaction fit from personality similarity' },
      {
        type: 'paragraph',
        text: 'If AIFM eventually estimates collaboration fit, it should be task-specific and validated against actual coordination outcomes:',
      },
      {
        type: 'equation',
        text: 'F_{ij,t} = f(R_{ij}, I_{ij}, D_t, O_t, Q_{ij})',
      },
      {
        type: 'paragraph',
        text: 'Here F_{ij,t} denotes the compatibility of the interaction between roles i and j for task t, not a universal friendship or employability score. R represents verified role definitions; I documented information exchange; D task demands; O operating conditions; Q evidence quality.',
      },
      { type: 'heading2', text: '7.5 Organizational context and confounding' },
      {
        type: 'paragraph',
        text: 'The same communication pattern may arise for different reasons. Short messages can reflect platform constraints, urgency, formal company standards, or a deliberate interpersonal preference. Delayed approvals may reflect insufficient authority, legal restrictions, a waiting dependency, or an individual’s approach to risk. AIFM must test these alternative explanations before attributing an outcome to a person.',
      },
      { type: 'heading1', text: '8. The Seven-Phase Forensic Operating Protocol' },
      {
        type: 'figure',
        figureType: 'phases',
        caption: 'Figure 6. Seven phases of the Aetheris investigation: 01 Identify -> 02 Baseline -> 03 Trace -> 04 Human Layer -> 05 Price -> 06 Correct -> 07 Verify.',
      },
      { type: 'heading2', text: 'Phase 1. Identify the organization, decision, and alleged loss' },
      {
        type: 'paragraph',
        text: 'Required artifact: Investigation charter. Define the organization, specific business question, affected process, calendar window, currency, accounting convention, expected intervention authority, and permissible source set. Identify whether the objective is revenue recovery, contribution improvement, avoided expense, lower working capital, or improved capacity.',
      },
    ],
  },
  {
    pageNumber: 17,
    partLabel: 'Part I',
    chapterTitle: '8. The Seven-Phase Forensic Operating Protocol',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: 'Phase 2. Measure the baseline with traceable records' },
      {
        type: 'paragraph',
        text: 'Required artifact: Read-only baseline dataset and data dictionary. The published Aetheris procedure specifies a twelve-month snapshot of lead-to-contact timing, deal progression, and follow-up activity from CRM or equivalent source exports [T11]. Missing records must be documented as missing. Derived values should never silently replace absent denominators.',
      },
      { type: 'heading2', text: 'Phase 3. Trace operational friction to candidate mechanisms' },
      {
        type: 'paragraph',
        text: 'Required artifact: Annotated process map and competing-mechanism table. Use the Golden Report to identify visible anomalies, then confirm relevant internal process transitions. For each finding, list the exact event or record, hypothesized mechanism, alternative explanations, potential cost consequence, and the evidence necessary to accept or reject it.',
      },
      { type: 'heading2', text: 'Phase 4. Map authorized work relationships and decision requirements' },
      {
        type: 'paragraph',
        text: 'Required artifact: Source-backed company Mindprint and role graph. Include only relevant individuals and roles under appropriate authorization. Import existing Golden Report findings as hypotheses; import explicit workflow links and supporting records; map decisions and information requirements.',
      },
      { type: 'heading2', text: 'Phase 5. Price each distinct economic mechanism' },
      {
        type: 'paragraph',
        text: 'Required artifact: Financial mechanism register with low, base, high, evidence status, and exact derivation. Distinguish the number of eligible opportunities from a raw volume estimate, the measured baseline from the comparison standard, revenue from contribution margin, and recoverable value from gross potential exposure. Use the canonical ledger to prevent duplicate counting.',
      },
      { type: 'heading2', text: 'Phase 6. Select and execute targeted corrections' },
      {
        type: 'paragraph',
        text: 'Required artifact: Approved intervention protocol. State the mechanism being corrected, expected metric, intervention owner, deployment date, total cost, control conditions where practical, rollback criteria, and monitoring frequency. Prefer the smallest intervention that can falsify the proposed',
      },
    ],
  },
  {
    pageNumber: 18,
    partLabel: 'Part I',
    chapterTitle: '9. Financial Measurement System and Equation Library',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'explanation. For a handoff problem, test a clarified acceptance rule before replacing the CRM. For a billing defect, test reconciliation and an exception queue before purchasing a new accounting platform.',
      },
      { type: 'heading2', text: 'Phase 7. Verify outcomes and maintain the recovery register' },
      {
        type: 'paragraph',
        text: 'Required artifact: Versioned pre/post dataset, comparison analysis, financial bridge, and signed review. The intervention should be evaluated on consistent outcome definitions and eligible populations. Separate gross benefit, net contribution, avoided expense, collected cash, and non-cash capacity. Never allow a revised report to overwrite the baseline or erase a contradicted finding.',
      },
      { type: 'heading1', text: '9. Financial Measurement System and Equation Library' },
      { type: 'heading2', text: '9.1 Funnel integrity and the transaction chain' },
      {
        type: 'paragraph',
        text: 'A complete lead-to-cash dataset may contain distinct transitions: visitor, captured inquiry, qualified inquiry, contacted inquiry, accepted opportunity, quoted opportunity, contract won, fulfilled order, invoice, and payment. The denominator for each stage is the eligible population that reached the preceding stage. For transition j:',
      },
      {
        type: 'equation',
        text: 'p̂_j = N_{j+1} / N_j ,     d̂_j = 1 − p̂_j',
      },
      { type: 'heading2', text: '9.2 Expected lost revenue, conditional on a defensible comparator' },
      {
        type: 'paragraph',
        text: 'Let N be eligible opportunities, p_0 the observed conversion probability, p_1 a valid comparison or intervention conversion probability, and V realized revenue per incremental conversion. Then:',
      },
      {
        type: 'equation',
        text: 'L̂_rev = N (p_1 − p_0) V     |     B̂_contrib = L̂_rev · m',
      },
      {
        type: 'paragraph',
        text: 'The margin m must be defined on incremental fulfillment costs, refunds, discounts, returns, and servicing, not assumed to equal gross product margin in every sector.',
      },
    ],
  },
  {
    pageNumber: 19,
    partLabel: 'Part I',
    chapterTitle: '9. Financial Measurement System and Equation Library',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '9.3 Time, capacity, and actual expense' },
      {
        type: 'paragraph',
        text: 'For weekly activity type k, let h_k represent validated hours, w the number of active weeks, c_k the appropriate loaded cost, and r_k the recoverable proportion. Gross time value is:',
      },
      {
        type: 'equation',
        text: 'H_{k,annual} = w · h_k ,     V_{k,capacity} = H_{k,annual} · c_k · r_k',
      },
      {
        type: 'paragraph',
        text: 'Capacity value is not necessarily a cash saving. Actual avoided expense should be recognized only when corresponding overtime, contractor hours, vacant-role replacement, or other actual cost is eliminated.',
      },
      {
        type: 'figure',
        figureType: 'time',
        caption: 'Figure 7. Distinction between time released (600 hrs @ $65 = $39,000), verified cost (overtime/contractor eliminated), and actual avoided expense.',
      },
      { type: 'heading2', text: '9.4 Billable value, receivables, and collected cash' },
      {
        type: 'equation',
        text: 'B_unbilled = ∑_i max(0, contractually_billable_i − invoiced_i)',
      },
      {
        type: 'paragraph',
        text: 'For collections, let C_recovered be money actually received following resolution of a specific billing exception. This is a cash-flow measure. If the receivable was already recognized in revenue, collecting it does not create a second revenue event.',
      },
      { type: 'heading2', text: '9.5 Distinct loss classes should not be casually summed' },
      {
        type: 'paragraph',
        text: 'AIFM recognizes four primary economic classes: revenue opportunity, contribution, expense/capacity, and billing/cash. Two entries are additive only if they are economically compatible, concern disjoint events or a properly partitioned common mechanism, and are not already reflected elsewhere.',
      },
    ],
  },
  {
    pageNumber: 20,
    partLabel: 'Part I',
    chapterTitle: '10. Complete Numerical Case: Four Mechanisms, Four Treatments',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '9.6 The financial bridge and program cost' },
      {
        type: 'equation',
        text: 'B_net = ΔR · m + C_avoided + B_other_valid − I     |     ROI = 100% × (B_net / I)     |     NPV = ∑_{t=0}^T CF_t / (1 + r)^t',
      },
      { type: 'heading2', text: '9.7 Data contamination and double attribution' },
      {
        type: 'paragraph',
        text: 'Suppose a sales-routing correction improves conversion and a marketing change improves the same conversion cohort. Counting the entire uplift under each duplicates value. Prefer randomized factorial tests, mutually exclusive cohorts, sequential rollout with verified time windows, or a clearly documented allocation method.',
      },
      { type: 'heading2', text: '9.8 Confidence as a vector, not a decorative percentage' },
      {
        type: 'equation',
        text: 'Q_k = (S_k, I_k, M_k, A_k, V_k)',
      },
      {
        type: 'paragraph',
        text: 'Where S is source reliability, I source independence, M measurement quality, A appropriateness of causal attribution, and V independent validation status. These dimensions should be reported separately until a composite score has been empirically calibrated.',
      },
      { type: 'heading1', text: '10. Complete Numerical Case: Four Mechanisms, Four Financial Treatments' },
      { type: 'heading2', text: '10.1 Purpose and source boundary' },
      {
        type: 'paragraph',
        text: 'The following case is a fully transparent synthetic financial illustration, not a client result. Its purpose is to demonstrate the complete chain from observation and organizational hypothesis to modeled exposure, intervention, comparison-adjusted outcome, financial classification, and return.',
      },
    ],
  },
  {
    pageNumber: 21,
    partLabel: 'Part I',
    chapterTitle: '10. Complete Numerical Case: Four Mechanisms',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'Consider a service organization with four separately defined affected populations: eligible new inquiries in Process A, independent quote opportunities in Process B, employee time records in Process C, and completed but incorrectly billed work in Process D. The populations are deliberately segregated so their benefits cannot be claimed twice.',
      },
      { type: 'heading2', text: '10.2 Case F01: lead ownership and qualification gap' },
      {
        type: 'paragraph',
        text: 'Observable condition. A cohort contains 5,000 otherwise eligible inquiries. The baseline conversion rate is 10.0%. The proposed reference is a 12.0% conversion rate among sufficiently comparable inquiries. The average realized revenue for a newly won transaction is $4,000. The proposed operational mechanism is an incomplete transfer of ownership between marketing qualification and sales follow-up.',
      },
      {
        type: 'equation',
        text: 'L_F01 = 5,000 (0.12 − 0.10) ($4,000) = $400,000',
      },
      {
        type: 'paragraph',
        text: 'Mindprint-enabled investigation. The researcher imports the Golden finding as a hypothesis, confirms the lead handoff relationship, reviews the written acceptance criteria, and interviews the responsible roles. Correction: Adopt one documented qualification schema, make ownership explicit, enforce routing and escalation, and log the time of each transfer and acknowledgment.',
      },
      {
        type: 'paragraph',
        text: 'Synthetic intervention evaluation. The treated group improves from 10.0% to 12.6%. A comparable untreated group improves from 12.0% to 13.0%. The net difference-in-differences estimate is:',
      },
      {
        type: 'equation',
        text: 'τ̂_F01 = (12.6 − 10.0) − (13.0 − 12.0) = 1.6 percentage points     |     R̂_F01 = 5,000 (0.016) ($4,000) = $320,000',
      },
    ],
  },
  {
    pageNumber: 22,
    partLabel: 'Part I',
    chapterTitle: '10. Complete Numerical Case: Four Mechanisms',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'figure',
        figureType: 'did',
        caption: 'Figure 8. Synthetic difference-in-differences comparison: Intervention cohort (10.0% -> 12.6%) vs Comparison cohort (12.0% -> 13.0%), adjusted improvement = 1.6 pp.',
      },
      {
        type: 'paragraph',
        text: 'Scientific caveat. A real difference-in-differences design requires comparable pretreatment trends and consideration of concurrent process changes, spillover, selection, and clustering [R9].',
      },
      { type: 'heading2', text: '10.3 Case F02: lost quote progression' },
      {
        type: 'paragraph',
        text: 'Observable condition. An independent quote cohort contains 800 eligible quotes. Some remain unattended or are repeatedly reassigned. The modeled intervention opportunity is a four-percentage-point increase in realized conversion. Average realized sales revenue is $6,000 per incremental won quote.',
      },
      {
        type: 'equation',
        text: 'L_F02 = 800 (0.04) ($6,000) = $192,000',
      },
      {
        type: 'paragraph',
        text: 'Correction. A named owner, dated follow-up rule, quote aging visibility, standardized status definitions, exception queue, and manager escalation after a defined idle period. Synthetic comparison-adjusted outcome (2.5-percentage-point effect):',
      },
      {
        type: 'equation',
        text: 'R̂_F02 = 800 (0.025) ($6,000) = $120,000',
      },
    ],
  },
  {
    pageNumber: 23,
    partLabel: 'Part I',
    chapterTitle: '10. Complete Numerical Case: Four Mechanisms',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '10.4 Case F03: duplicated administrative work' },
      {
        type: 'paragraph',
        text: 'Observable condition. Payroll- and workflow-linked records document an annual 1,800 hours of rework, duplicated data entry, or manual reconciliation. The recorded loaded labor cost is $65 per hour.',
      },
      {
        type: 'equation',
        text: 'V_gross_capacity = 1,800 ($65) = $117,000     |     C_{F03,avoided} = 600 ($65) = $39,000',
      },
      {
        type: 'paragraph',
        text: 'Suppose the intervention eliminates 600 hours of overtime that would otherwise have been paid at the stipulated loaded cost ($39,000). The remaining 1,200 hours of nominal capacity must be analyzed separately; they are not automatically $78,000 in realized cash savings.',
      },
      { type: 'heading2', text: '10.5 Case F04: unbilled completed work' },
      {
        type: 'paragraph',
        text: 'Observable condition. A contractual work-to-invoice reconciliation identifies $90,000 in completed services that had not been correctly billed or otherwise resolved.',
      },
      {
        type: 'equation',
        text: 'B_{F04,identified} = $90,000     (Synthetic cash collection: $55,000)',
      },
      { type: 'heading2', text: '10.6 Consolidated mechanism register' },
      {
        type: 'table',
        headers: ['Case', 'Economic class', 'Modeled gross exposure', 'Synthetic outcome', 'Outcome classification'],
        rows: [
          ['F01', 'Lost sales revenue', '$400,000', '$320,000', 'Incremental revenue scenario'],
          ['F02', 'Lost sales revenue', '$192,000', '$120,000', 'Incremental revenue scenario'],
        ],
      },
    ],
  },
  {
    pageNumber: 24,
    partLabel: 'Part I',
    chapterTitle: '10. Complete Numerical Case: Profit Bridge',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'table',
        headers: ['Case', 'Economic class', 'Modeled gross exposure', 'Synthetic outcome', 'Outcome classification'],
        rows: [
          ['F03', 'Labor capacity / expense', '$117,000', '$39,000', 'Avoided overtime scenario'],
          ['F04', 'Unbilled / collection', '$90,000', '$55,000', 'Cash collection scenario'],
          ['Total (mixed)', 'Not one accounting line', '$799,000', '$534,000', 'Gross inventory only'],
        ],
      },
      {
        type: 'figure',
        figureType: 'mechanisms',
        caption: 'Figure 9. Exposed values and proposed outcomes differ in kind: Lead routing ($400k / $320k), Quote follow-up ($192k / $120k), Admin rework ($117k / $39k), Billing exceptions ($90k / $55k).',
      },
      {
        type: 'paragraph',
        text: 'The total $799,000 is best described as nominal mixed economic exposure. It is not a homogeneous annual revenue-loss number. Similarly, $534,000 contains $440,000 of incremental sales revenue, $39,000 of avoided expense, and $55,000 of cash collection.',
      },
      { type: 'heading2', text: '10.7 Profit bridge: accrual-consistent base interpretation' },
      {
        type: 'equation',
        text: 'ΔR = $320,000 + $120,000 = $440,000   |   ΔP_sales = $440,000 (0.35) = $154,000\nB_pre-cost = $154,000 + $39,000 = $193,000   |   B_net = $193,000 − $85,000 = $108,000   |   ROI = 127.1%',
      },
    ],
  },
  {
    pageNumber: 25,
    partLabel: 'Part I',
    chapterTitle: '10. Complete Numerical Case: Economic Bridge & Sensitivity',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'The separate $55,000 collected on outstanding receivables improves cash flow, but is excluded from income benefit in this base scenario because it is assumed already recognized as revenue.',
      },
      {
        type: 'figure',
        figureType: 'bridge',
        caption: 'Figure 10. Economic bridge: Incremental revenue ($440k) -> Contribution @35% ($154k) -> Overtime avoided ($39k) -> Pre-cost benefit ($193k) -> Program cost ($85k) -> Net economic benefit ($108k).',
      },
      { type: 'heading2', text: '10.8 Alternative accounting scenario' },
      {
        type: 'paragraph',
        text: 'If financial review instead establishes that the $55,000 represents legitimate, previously unrecognized or written-off income that creates $55,000 of current-period economic benefit without incremental fulfillment costs, then a conditional alternative is:',
      },
      {
        type: 'equation',
        text: 'B_{net,alt} = $193,000 + $55,000 − $85,000 = $163,000     |     ROI_alt = 100% × ($163,000 / $85,000) = 191.8%',
      },
      { type: 'heading2', text: '10.9 Counterfactual and sensitivity analysis' },
      {
        type: 'equation',
        text: 'B_net(r, m) = $440,000 · r · m + $39,000 − $85,000',
      },
      {
        type: 'paragraph',
        text: 'The sensitivity surface uses 50%, 65%, 80%, and 100% of modeled revenue realization and contribution margins of 25% through 45%.',
      },
    ],
  },
  {
    pageNumber: 26,
    partLabel: 'Part I',
    chapterTitle: '11. Recovery Intervention Design and Operating Economics',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'figure',
        figureType: 'heatmap',
        caption: 'Figure 11. Net economic benefit sensitivity surface across sales realization (50%–100%) and incremental contribution margin (25%–45%): ranges from $9k to $152k.',
      },
      {
        type: 'paragraph',
        text: 'For example, at only 50% revenue realization and a 25% margin, net benefit is $9,000 ($440,000 × 0.5 × 0.25 + $39,000 − $85,000). At 100% realization and a 35% margin it is $108,000. At 100% and 45% it is $152,000.',
      },
      { type: 'heading2', text: '10.10 Falsification tests for the case' },
      {
        type: 'paragraph',
        text: 'The F01 mechanism is weakened if lead timing does not change after ownership rules are corrected, or if the corrected group does not improve relative to appropriate controls. F02 is weakened if quote outcomes are unaffected by the documented follow-up correction. F03 is weakened if the eliminated process steps do not reduce actual overtime. F04 is weakened if the supposed unbilled work was not contractually billable.',
      },
      { type: 'heading1', text: '11. Recovery Intervention Design and Operating Economics' },
      { type: 'heading2', text: '11.1 Mechanism-specific intervention selection' },
      {
        type: 'paragraph',
        text: 'The method prioritizes correcting the least costly intervention point that addresses the supported mechanism. Changing the website CTA may increase lead volume without improving the handoff. Buying a new CRM may retain the same qualification',
      },
    ],
  },
  {
    pageNumber: 27,
    partLabel: 'Part I',
    chapterTitle: '11. Recovery Intervention Design and Operating Economics',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'disagreement. The corrective action with the strongest mechanistic fit may simply be one shared required-field definition and one accountable owner.',
      },
      {
        type: 'table',
        headers: ['Mechanism', 'Minimum diagnostic evidence', 'Candidate no-new-platform correction', 'Primary verification measure'],
        rows: [
          ['Lead-routing gap', 'Event time, owner history, eligible population', 'Routing rule + exception escalation', 'Contact SLA & lead conversion'],
          ['Quote follow-up gap', 'Quote ID, owner, follow-up, disposition', 'Aging queue + named ownership', 'Quote-to-contract conversion'],
          ['Duplicate record work', 'Duplicate IDs + observed correction time', 'Validation and identity rules', 'Paid overtime / manual rework hours'],
          ['Ambiguous approval', 'Decision log + policy + role confirmation', 'Decision-rights matrix', 'Approval cycle time and quality'],
          ['Missing invoice trigger', 'Fulfillment / contract / invoice joins', 'Reconciliation queue', 'Correct invoices and received cash'],
          ['Contradictory message', 'Cited public statements + customer tests', 'Harmonize offer definitions', 'Controlled conversion metric'],
          ['Fragile knowledge', 'Confirmed workflow & single-person load', 'Documentation & cross-training', 'Incident frequency & recovery time'],
          ['Inconsistent exceptions', 'Tickets, handoff history, source notes', 'One exception workflow + feedback', 'Repetition rate and cycle time'],
        ],
      },
      { type: 'heading2', text: '11.2 Choosing low-risk diagnostic interventions' },
      {
        type: 'paragraph',
        text: 'Every intervention should include a hypothesis, predicted direction, primary endpoint, acceptable risk limit, and decision date. Where randomization is impossible, matched comparisons, interrupted time series, or carefully specified difference-in-differences may be used with sensitivity analysis [R8, R9].',
      },
      { type: 'heading2', text: '11.3 Recovery eligibility and the finance signoff' },
      {
        type: 'paragraph',
        text: 'A claim of recovered revenue should require an eligible opportunity ID, intervention exposure, attributable outcome, transaction amount, and verification method. A claim of avoided expense should require the cost account or paid-hours reduction, not just staff self-reported time savings.',
      },
      { type: 'heading2', text: '11.4 Financial recovery thresholds' },
      {
        type: 'callout',
        text: 'Recovery Statuses: identified -> modeled -> corroborated -> intervention initiated -> operationally improved -> financially realized -> independently verified.',
      },
    ],
  },
  {
    pageNumber: 28,
    partLabel: 'Part I',
    chapterTitle: '12. What Externally Published Cases Can Contribute',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '11.5 Recovery ROI after implementation' },
      {
        type: 'paragraph',
        text: 'All-in cost includes software configuration, data engineering, labor, change management, measurement, security review, and ongoing support. If a client buys an automation subscription that costs $30,000 annually to eliminate $15,000 of avoidable overtime, the net financial effect is negative even if the process becomes faster. The objective is net economic improvement, not the maximum number of tools deployed.',
      },
      { type: 'heading1', text: '12. What Externally Published Cases Can Contribute' },
      { type: 'heading2', text: '12.1 Role of external evidence' },
      {
        type: 'paragraph',
        text: 'Outside studies can demonstrate that particular mechanisms are plausible or that interventions have succeeded elsewhere. They cannot prove that the same dollar result will occur in an Aetheris-scanned company. External examples should therefore appear as corroborating research rather than as Aetheris-client recovery claims.',
      },
      { type: 'heading2', text: '12.2 Lead response and qualification' },
      {
        type: 'paragraph',
        text: 'Oldroyd, McElheran, and Elkington’s 2011 Harvard Business Review research identifies substantial differences in lead qualification likelihood associated with response timing [R10]. The study supports making response latency a candidate diagnostic variable. It does not supply a universal multiplier that can be applied to any company’s website traffic to compute lost revenue.',
      },
      { type: 'heading2', text: '12.3 Sales automation and coordination' },
      {
        type: 'paragraph',
        text: 'McKinsey’s 2020 research reports that early adopters of sales automation experienced efficiency improvements around 10% to 15% and discussed an industrial bid process reduced from approximately three weeks to two hours, associated with a reported 5% revenue uplift [R13]. This illustrates the possibility of operational value from targeted process redesign.',
      },
      { type: 'heading2', text: '12.4 New Balance Chicago: a documented third-party funnel example' },
      {
        type: 'paragraph',
        text: 'Unbounce’s reported New Balance Chicago campaign case describes targeted mobile landing pages, email collection, and Facebook advertising [R12]. The case illustrates coordinated conversion design and the importance of source-specific definitions, but does not provide an independently audited decomposition of incremental contribution.',
      },
      { type: 'heading2', text: '12.5 External research is not a recovery ledger' },
      {
        type: 'paragraph',
        text: 'The existence of fifty externally sourced examples in the Aetheris case-study library is evidence of a structured collection of analogies and published claims [T13]. The separate dollar amount map [T12] requires stronger per-case source verification before its figures can be described as observed recovery.',
      },
    ],
  },
  {
    pageNumber: 29,
    partLabel: 'Part I',
    chapterTitle: '13. Statistical Science of the Collective Brain',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'For peer-reviewed purposes, each example needs source authorship, original observation period, event denominators, financial basis, difference between gross and net benefit, and any relevant methodological caveat.',
      },
      { type: 'heading1', text: '13. Statistical Science of the Collective Brain' },
      { type: 'heading2', text: '13.1 Unique-company prevalence' },
      {
        type: 'paragraph',
        text: 'For root-cause pattern k, define n_k as the number of independently represented companies with at least one qualifying report containing the confirmed pattern, and N_k as the number of eligible companies with sufficient evidence to test that pattern. Then:',
      },
      {
        type: 'equation',
        text: 'P̂_k = n_k / N_k',
      },
      {
        type: 'paragraph',
        text: 'The denominator should not include companies whose scan lacked the source needed to observe that pattern. A website-only scan without CRM access cannot be treated as evidence that a CRM handoff problem was absent.',
      },
      { type: 'heading2', text: '13.2 Within-report co-occurrence' },
      {
        type: 'equation',
        text: 'P̂(A, B) = N(A ∩ B) / N_eligible     |     Lift(A, B) = P̂(A, B) / [P̂(A) · P̂(B)]',
      },
      {
        type: 'paragraph',
        text: 'Lift above one indicates co-occurrence above the independence baseline in the analyzed data. It is not a causal effect. Confidence intervals, multiple-testing adjustment, minimum support, source coverage, and organization-level clustering are necessary before promoting pairwise patterns as actionable research findings.',
      },
      { type: 'heading2', text: '13.3 Repeated reports and dependence' },
      {
        type: 'paragraph',
        text: 'If one company has many reports, its findings may disproportionately affect report-level frequency. Company-level analysis should use deduplicated firm identifiers, latest-evidence rules, or hierarchical longitudinal models. The recorded ratio of approximately 1.79 reports per company reinforces the importance of this choice.',
      },
      { type: 'heading2', text: '13.4 Semantic stability and root-cause ontology' },
      {
        type: 'paragraph',
        text: 'Normalized titles are convenient identifiers, but small changes in wording can split essentially identical mechanisms. The system should retain the original statement and map it to a versioned research',
      },
    ],
  },
  {
    pageNumber: 30,
    partLabel: 'Part I',
    chapterTitle: '14. Measurement Error, Confidence, and Model Calibration',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'ontology: for example, lead-ownership gaps, incomplete data, latency, inconsistent qualification, approval bottleneck, billing exception, and duplicated effort. A stratified sample of pattern assignments should be adjudicated by reviewers who are blind to projected financial value.',
      },
      { type: 'heading2', text: '13.5 Industry-level estimation' },
      {
        type: 'paragraph',
        text: 'Industry profiles should be estimated only after reliable classification. The Golden Report Collective Brain source code incorporates heuristic and website-assisted industry assignment with recorded confidence, source signals, and missing classification when evidence is insufficient [T2].',
      },
      { type: 'heading2', text: '13.6 Multiplicity and false discovery' },
      {
        type: 'paragraph',
        text: 'Hundreds of patterns and hundreds of possible pairs can produce apparently compelling associations by chance. Candidate relationships can be screened with false-discovery-rate control, then replicated in an independent temporal holdout sample.',
      },
      { type: 'heading2', text: '13.7 Bias sources in the library' },
      {
        type: 'paragraph',
        text: 'The Golden Report corpus may overrepresent particular industries, company sizes, prospect acquisition sources, and firms willing to share URLs. Thus, observed frequencies describe the scanned population, not all businesses.',
      },
      { type: 'heading1', text: '14. Measurement Error, Confidence, and Model Calibration' },
      { type: 'heading2', text: '14.1 Distinguish four kinds of uncertainty' },
      {
        type: 'paragraph',
        text: 'First, source uncertainty concerns whether the inputs are true. Second, construct uncertainty concerns whether the signal represents what it claims to measure: concise LinkedIn language is not a validated measure of decision speed. Third, causal uncertainty concerns whether changing the alleged mechanism would improve the outcome. Fourth, financial uncertainty concerns whether any observed improvement becomes collectible revenue, net contribution, eliminated expense, or only capacity.',
      },
    ],
  },
  {
    pageNumber: 31,
    partLabel: 'Part I',
    chapterTitle: '14. Measurement Error, Confidence, and Model Calibration',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '14.2 Statistical uncertainty around conversion' },
      {
        type: 'paragraph',
        text: 'If X of N eligible opportunities convert, the simple proportion estimate is p̂ = X / N. Under independent Bernoulli sampling, its approximate standard error is:',
      },
      {
        type: 'equation',
        text: 'SE(p̂) = √[ p̂(1 − p̂) / N ]',
      },
      {
        type: 'paragraph',
        text: 'This formula is a starting point, not a replacement for clustered or longitudinal analysis when observations belong to shared organizations, campaigns, or customers.',
      },
      { type: 'heading2', text: '14.3 Propagating monetary uncertainty' },
      {
        type: 'equation',
        text: 'R̂ = N · τ̂ · V̂     |     Var(R̂) ≈ (NV)² Var(τ̂) + (Nτ)² Var(V̂) + 2N²τV Cov(τ̂, V̂)',
      },
      {
        type: 'paragraph',
        text: 'In a real case, a cluster bootstrap or resampling at the appropriate unit may be preferable. AIFM should preserve an interval for economic benefit rather than present two arbitrary endpoints as a statistically derived confidence interval.',
      },
      { type: 'heading2', text: '14.4 Calibration of risk scores' },
      {
        type: 'equation',
        text: 'BS = (1 / N) ∑_{i=1}^N (p_i − y_i)²',
      },
      {
        type: 'paragraph',
        text: 'Where p_i is the predicted probability and y_i the observed outcome. A score described as “78% compatibility” is not scientifically meaningful unless the outcome being predicted and its calibration are specified.',
      },
      { type: 'heading2', text: '14.5 Missingness and sensitivity' },
      {
        type: 'paragraph',
        text: 'Missing data should not be replaced with industry averages and then displayed as observed loss. Where records are incomplete, conduct missingness analysis and report bounds under explicit scenarios.',
      },
    ],
  },
  {
    pageNumber: 32,
    partLabel: 'Part I',
    chapterTitle: '15. Prospective Scientific Validation Study',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '14.6 Robustness requirements' },
      {
        type: 'paragraph',
        text: 'A finding is more credible when it survives changes in eligible-population definitions, outcome measurement windows, model specifications, source inclusion, and comparison group selection. Data-driven selection of whichever specification produces the largest savings estimate is not acceptable scientific practice.',
      },
      { type: 'heading1', text: '15. Prospective Scientific Validation Study' },
      { type: 'heading2', text: '15.1 Design overview' },
      {
        type: 'paragraph',
        text: 'The central proposition can be tested using a blinded comparative design with three diagnostic conditions. Condition A receives a conventional operational assessment. Condition B receives the Golden Report with comparable authorized operational records. Condition C receives the Golden Report plus Mindprint’s authorized professional evidence and verified organization relationship graph.',
      },
      {
        type: 'figure',
        figureType: 'validation',
        caption: 'Figure 12. Proposed independent evaluation framework: Eligible Organizations -> Control A (Standard audit) | Control B (Golden Report) | Intervention C (Golden + Mindprint) -> Independent Outcome Review.',
      },
      { type: 'heading2', text: '15.2 Predefined hypotheses' },
      {
        type: 'metadata',
        items: [
          'H1, explanatory accuracy: Condition C identifies a higher proportion of independently adjudicated true operational mechanisms than Condition B.',
          'H2, precision: Condition C makes fewer unsupported human-causation claims per case than an unstructured combined narrative.',
          'H3, intervention selection: Condition C more often chooses a correction judged to target the independently verified mechanism, at the same or lower cost.',
          'H4, economic effectiveness: Cases investigated under Condition C generate greater net attributable contribution benefit after deducting implementation costs.',
        ],
      },
    ],
  },
  {
    pageNumber: 33,
    partLabel: 'Part I',
    chapterTitle: '15. Prospective Scientific Validation Study',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'H5, moderation. Condition C’s incremental advantage is concentrated in problems where confirmed role, handoff, or information dependencies contribute materially to the outcome, rather than isolated technical defects.',
      },
      { type: 'heading2', text: '15.3 Eligibility, randomization, and blinding' },
      {
        type: 'paragraph',
        text: 'Eligible participating organizations should have a specific documented performance problem, an identified decision-maker, access to relevant records, and willingness to permit appropriately scoped assessment. External adjudicators should receive source records with the diagnostic condition concealed as far as practical.',
      },
      { type: 'heading2', text: '15.4 Primary and secondary endpoints' },
      {
        type: 'paragraph',
        text: 'The primary endpoint should be verified mechanism detection accuracy, calculated against an independently adjudicated reference standard. Secondary endpoints include unsupported-finding rate, number of verified cross-functional dependencies identified, time to validated diagnosis, implementation cost, change in process outcomes, cash expense avoided, incremental contribution, and net economic benefit.',
      },
      { type: 'heading2', text: '15.5 Sample size and power' },
      {
        type: 'paragraph',
        text: 'Sample size must be determined after selecting the primary endpoint, plausible between-condition effect, baseline accuracy, unit of randomization, intraclass correlation, and anticipated missingness. A pilot should first estimate feasibility, source availability, adjudicator agreement, and practical variance.',
      },
      { type: 'heading2', text: '15.6 Analysis plan' },
      {
        type: 'paragraph',
        text: 'For binary mechanism accuracy, compare diagnostic conditions using an appropriate regression or cluster-aware method with pre-specified covariates. For monetary benefit, report average incremental net benefit with uncertainty and its distribution, not only a grand total dominated by a few large clients. Include negative and zero-benefit cases.',
      },
    ],
  },
  {
    pageNumber: 34,
    partLabel: 'Part I',
    chapterTitle: '16. Governance: Humans, Privacy, Security, and Fairness',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '15.7 Independent reproducibility' },
      {
        type: 'paragraph',
        text: 'A blinded reviewer with read-only access should be able to reconstruct every case’s eligible population, baseline metric, source-to-finding links, intervention date, post-period metrics, marginal-cost assumptions, and economic bridge.',
      },
      { type: 'heading1', text: '16. Governance: Humans, Privacy, Security, and Fairness' },
      { type: 'heading2', text: '16.1 The legitimate boundary of Mindprint' },
      {
        type: 'paragraph',
        text: 'Professional text can support a description of communication patterns within the available sources. It cannot establish a clinical diagnosis, cognitive capacity, protected attributes, or a deterministic interpersonal compatibility verdict. Mindprint should be used to propose process-relevant questions and design better communication requirements, not to decide hiring, termination, compensation, promotion, or discipline.',
      },
      { type: 'heading2', text: '16.2 Consent and purpose limitation' },
      {
        type: 'paragraph',
        text: 'AIFM should separate consent for private individual self-reports from employer authorization to review business records. The Mindprint evidence graph already requires a consent reference for verified private self-reports and enforces organization boundaries [T14].',
      },
      { type: 'heading2', text: '16.3 Tenant and identity integrity' },
      {
        type: 'paragraph',
        text: 'A report from Company A must never become evidence for Company B merely because the names are similar. The system should use verified organization identifiers, source-origin metadata, and consistent deletion or retention rules.',
      },
      { type: 'heading2', text: '16.4 Fairness in interpretation' },
      {
        type: 'paragraph',
        text: 'Differences in language style can reflect culture, disability, job role, professional training, situation, or audience. A concise speaker is not necessarily less reflective; a detailed speaker is not necessarily indecisive; a cautious approver is not necessarily the source of delay. If a pattern can be explained without imputing a personal trait, prefer the directly observable mechanism.',
      },
    ],
  },
  {
    pageNumber: 35,
    partLabel: 'Part I',
    chapterTitle: '17. Technical Quality Gates and Implementation Boundaries',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '16.5 External safeguards' },
      {
        type: 'paragraph',
        text: 'NIST’s AI Risk Management Framework offers a useful reference for valid and reliable systems, accountability, transparency, privacy, fairness, and governance [R11]. Behavioral conclusions and financial totals should have separate approval pathways, because their evidentiary needs differ.',
      },
      { type: 'heading1', text: '17. Technical Quality Gates and Known Implementation Boundaries' },
      { type: 'heading2', text: '17.1 What has been implemented in the reviewed materials' },
      {
        type: 'paragraph',
        text: 'The reviewed Golden Report source contains a canonical versioned financial ledger, reconciliation rules, source-linked claim structures, generic-report detection, archive records, Collective Brain aggregate tables, and engineering-test fixtures [T1-T8]. The Mindprint source contains typed evidence, findings, role connections, outcome records, source checks, Golden Report hypothesis import, workflow link import, and company evidence graph composition [T14-T18]. The Mindprint roadmap records 84 passing tests related to collaboration intelligence [T18].',
      },
      { type: 'heading2', text: '17.2 What the review has not verified' },
      {
        type: 'paragraph',
        text: 'This manuscript has not received a complete live export of the Golden Report archive and financial ledger records, nor a matched dataset of actual Mindprint employees and intervention outcomes. It has not independently replicated the roadmap’s aggregate counts against production tables, confirmed the external provenance of all fifty case-study dollar labels, or measured comparative diagnostic improvement from randomized organizations.',
      },
      { type: 'heading2', text: '17.3 Needed software-to-science upgrades' },
      {
        type: 'paragraph',
        text: 'The most important improvements are (1) transaction-linked validation of every amount labeled measured; (2) consistent company-level prevalence extraction; (3) a versioned root-cause ontology replacing title string equality alone; (4) explicit source independence checks; (5) separate confidence dimensions for source, construct, causal claim, and financial valuation; (6) an append-only intervention and outcome journal; (7) financial accounting category controls; (8) reproducible data extraction and model versions; (9) independent review of high-dollar findings; and (10) external prospective evaluation of the incremental Mindprint contribution.',
      },
      { type: 'heading2', text: '17.4 Evidence quality versus mathematical sophistication' },
      {
        type: 'callout',
        text: 'Adding more formulas or visualizations does not transform a weak source into strong evidence. A simple, transaction-backed 60-day lead-routing experiment can be more persuasive than a sixty-page report with an elaborate but unverified loss model.',
      },
    ],
  },
  {
    pageNumber: 36,
    partLabel: 'Part I',
    chapterTitle: '18. Scientific Interpretation and Practical Implications',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '18. Scientific Interpretation and Practical Implications' },
      { type: 'heading2', text: '18.1 What the corpus demonstrates' },
      {
        type: 'paragraph',
        text: 'The recorded corpus demonstrates scale of report generation and indexing: 1,910 reports, 1,067 represented companies, 22,282 indexed findings, 701 patterns, and 339 co-occurrence records. The sources provide a technical means to identify repeated themes and link observations to financial models [T1-T8]. They do not independently establish recovered dollars or prevalence of particular validated root causes.',
      },
      { type: 'heading2', text: '18.2 What the integrated method adds conceptually' },
      {
        type: 'paragraph',
        text: 'Golden Report can locate a problem’s observed surface and financial consequence. Mindprint can help organize evidence regarding the people and relationships through which the affected process is executed. The combination potentially improves mechanism fit: an investigation might reveal that a lead-routing problem is caused by an inconsistent definition and responsibility boundary, not the absence of automation.',
      },
      { type: 'heading2', text: '18.3 Why avoided subscriptions may be a valid economic result' },
      {
        type: 'paragraph',
        text: 'An intervention that corrects an existing system for $10,000 instead of purchasing a $60,000 platform can create real avoided expense if a credible business alternative would otherwise have been bought. However, a hypothetical avoided purchase that the company never intended to make is not a verified saving.',
      },
      { type: 'heading2', text: '18.4 Why finding causes is not the same as blaming people' },
      {
        type: 'paragraph',
        text: 'The organizational root cause often resides in handoff definitions, incentives, incomplete information, workload, or authority. The work relationship graph is valuable because it identifies those interfaces. Its purpose is to redesign work so that a reasonable employee can execute effectively, not to impose a speculative personality explanation on a business failure.',
      },
      { type: 'heading2', text: '18.5 The financial north star' },
      {
        type: 'paragraph',
        text: 'The correct program-level outcome is net attributable economic benefit, with gross incremental revenue, avoided expense, cash collections, and non-cash capacity reported separately.',
      },
    ],
  },
  {
    pageNumber: 37,
    partLabel: 'Part I',
    chapterTitle: '19. Findings on the First Two Instruments & Transition',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '19. Findings on the First Two Instruments and the Transition to Ask Intros' },
      {
        type: 'paragraph',
        text: 'Aetheris Integrated Forensic Methodology is an evidence-integrated approach to business diagnosis developed from two complementary software systems and a structured financial ledger. Golden Report provides the organizational finding and financial-modeling layer. Mindprint provides professional communication hypotheses and explicitly sourced organizational relationships. The integrated graph connects claims with decisions, interventions, and outcomes.',
      },
      {
        type: 'paragraph',
        text: 'The reviewed primary materials establish a concrete implemented foundation: a multi-company report corpus, versioned canonical financial arithmetic, source-linked claims, duplicate-loss controls, report aggregation, and human/organizational evidence structures. The synthetic numerical case shows how a superficially impressive $799,000 mixed exposure number must be decomposed into its actual economic categories and how $534,000 in mixed observed or modeled outcomes becomes $108,000 of net economic benefit under one defensible accounting interpretation.',
      },
      {
        type: 'callout',
        text: 'Testable Scientific Proposition: When human and relational evidence is introduced carefully, with independent corroboration and without unsupported psychological inference, does the combined forensic model identify and correct costly business mechanisms more accurately than organizational analysis alone?',
      },
      {
        type: 'equation',
        text: 'observe -> attribute sources -> distinguish symptom from mechanism -> validate relationships -> price without duplication -> correct the supported cause -> measure realized result -> preserve for replication',
      },
    ],
  },
  {
    pageNumber: 38,
    partLabel: 'Part II',
    chapterTitle: '20. The Missing Third Instrument: Relationship Execution',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: 'PART II. ASK INTROS AS THE RELATIONSHIP INTERVENTION AND OUTCOME LAYER' },
      {
        type: 'paragraph',
        text: 'Extension to the Aetheris Integrated Forensic Methodology. This part examines the existing Ask Intros repository as a third system: an authorized relationship and execution environment that can help turn diagnostic hypotheses into appropriately consented introductions, work decisions, accountable actions, and recorded results. [B1-B18]',
      },
      {
        type: 'figure',
        figureType: 'trinity',
        caption: 'Figure 13. Three Aetheris systems: Golden Report (Where process and money leak) -> Mindprint (Who/what coordinates decisions) -> Ask Intros (Who can act; did it work?) -> Evidence, Intervention and Outcome Register.',
      },
      { type: 'heading1', text: '20. The Missing Third Instrument: Why Relationship Execution Belongs in Business Forensics' },
      { type: 'heading2', text: '20.1 Moving from identifying failure to changing the conditions that maintain it' },
      {
        type: 'paragraph',
        text: 'Golden Report and Mindprint answer different parts of an organizational question. Neither source of intelligence, in isolation, ensures that an appropriate person receives a relevant finding, consents to discuss it, acts on it, or produces a measurable economic result. Ask Intros is an operational candidate for that missing phase: the application of evidence to professional relationships, followed by recording the response and the outcome. [T14-T18, B1-B3]',
      },
      {
        type: 'paragraph',
        text: 'The Ask Intros architecture defines the core loop as Diagnose -> Map -> Score -> Connect -> Compound. Its defining question is which relationship has sufficient relevance, mutual value, trust, and timing to justify a conversation.',
      },
    ],
  },
  {
    pageNumber: 39,
    partLabel: 'Part II',
    chapterTitle: '21. The Scientific Foundations of Relationship Forensics',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'callout',
        text: 'Working Research Hypothesis H-AI1: After a financial or operational mechanism has been identified, an evidence-guided relationship intervention will increase the probability of a timely, relevant, consented action when compared with a generic request to contact more people.',
      },
      { type: 'heading2', text: '20.2 The three distinct roles in the integrated investigation' },
      {
        type: 'table',
        headers: ['System', 'Unit of analysis', 'Evidence function', 'Decision output', 'Principal limitation'],
        rows: [
          ['Golden Report', 'Company, process, economic mechanism', 'Company observations, priced findings, financial ledgers', 'Candidate loss and corrective priority', 'Website or modeled range does not prove internal loss'],
          ['Mindprint', 'Person, role, documented relationship', 'Professional signals, conflicting evidence, confirmed links', 'Questions about coordination & decision pathways', 'Public language does not establish personality or performance'],
          ['Ask Intros', 'Business need, path, approved action, result', 'CRM events, stated needs/offers, consent, outcomes', 'Relevant next action and traceable outcome', 'Match score or deal value is not causal recovered revenue'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Ask Intros is therefore best interpreted as the intervention and learning layer of the larger forensic method. An unanswered request, explicit decline, completed meeting, signed agreement, and collected invoice are different outcomes. [B2, B13, B15]',
      },
      { type: 'heading1', text: '21. The Scientific Foundations of Relationship Forensics' },
      { type: 'heading2', text: '21.1 Network ties, access to information, and organizational boundaries' },
      {
        type: 'paragraph',
        text: 'Granovetter’s weak-ties argument explains how ties connecting otherwise separated groups may expose people to different information and opportunities [R14]. Burt’s analysis of structural holes develops a related theory of brokerage between disconnected network regions [R15]. Aral and Van Alstyne show that greater network diversity does not always increase useful information when communication bandwidth falls [R16].',
      },
      {
        type: 'equation',
        text: 'G_R = (V_R, E_R) ,     e_{ij} = (type, source, scope, time, consent)',
      },
    ],
  },
  {
    pageNumber: 40,
    partLabel: 'Part II',
    chapterTitle: '21. The Scientific Foundations of Relationship Forensics',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'A valid proposed route from an owner to a relevant expert is a sequence of edges with documented status. An inferred or proposed edge should remain explicitly unconfirmed until permissioned evidence establishes it. An algorithm may propose a route, but it must not silently promote a suggested intermediary into a confirmed relationship.',
      },
      {
        type: 'figure',
        figureType: 'relationship_graph',
        caption: 'Figure 18. Relationship evidence graph showing recorded edges (solid), proposed unconfirmed edges (dashed), and outcome links requiring independent proof (dotted).',
      },
      { type: 'heading2', text: '21.2 Trust is not a single inferred personality score' },
      {
        type: 'paragraph',
        text: 'Mayer, Davis and Schoorman distinguish organizational trust from mere familiarity or similarity [R17]. AIFM adopts the narrower operational question: what evidence supports the relevance and legitimacy of this specific request, and what uncertainty remains? Ask Intros’ design rules explicitly prohibit manufacturing trust, relationship history, private intent, deal value, or introduction paths. [B2, B4]',
      },
      {
        type: 'paragraph',
        text: 'In research terminology, the system must separate (a) stated business need, (b) recorded relationship edge, (c) availability, (d) behavioral or communication hypothesis, and (e) independent evidence of completed outcomes.',
      },
      { type: 'heading2', text: '21.3 The business objective is the diagnostic starting point' },
      {
        type: 'paragraph',
        text: 'The Ask Intros rules require a recommendation to answer Why Them? Why You? Why Now?. For example, an executive’s broad request to “meet manufacturing CEOs” is not an economically defined problem. A forensic request might be: “Find an authorized operator at a distributor who can review why quotation handoffs are delaying confirmed customer orders, and arrange one substantive discussion within 30 days.” [B2]',
      },
    ],
  },
  {
    pageNumber: 41,
    partLabel: 'Part II',
    chapterTitle: '22. Ask Intros’ Actual Five-Stage Operating Method',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '22. Ask Intros’ Actual Five-Stage Operating Method' },
      {
        type: 'figure',
        figureType: 'five_stage',
        caption: 'Figure 14. Ask Intros’ five-stage sequence with principal evidentiary safeguards: 01 Diagnose (No fabricated need) -> 02 Map (No inferred trust) -> 03 Score (No probability claim) -> 04 Connect (No silent outreach) -> 05 Compound (No invented recovery).',
      },
      { type: 'heading2', text: '22.1 Diagnose: distinguish the stated goal from the actual obstacle' },
      {
        type: 'paragraph',
        text: 'The Diagnose stage converts a general networking objective into an operational case. Relevant inputs include the company or person involved, the current outcome, what is blocking progress, available evidence, the value offered to another party, and a measurable success condition. [T4-T7, B1, B9]',
      },
      { type: 'heading2', text: '22.2 Map: reconstruct an authorized path' },
      {
        type: 'paragraph',
        text: 'The Map stage organizes known people, companies, offers, needs, past meetings, CRM activities, commitments, and possible connectors. Every AI-derived field should retain value, confidence, evidence IDs, source type, and privacy scope. [B1]',
      },
      { type: 'heading2', text: '22.3 Score: rank evidence-supported relevance, not human worth' },
      {
        type: 'paragraph',
        text: 'Ask Intros contains deterministic ranking engines. These produce ordinal recommendation scores based on documented and structured inputs. They are not empirical probabilities that a person will agree, buy, or produce revenue.',
      },
    ],
  },
  {
    pageNumber: 42,
    partLabel: 'Part II',
    chapterTitle: '23. Exact Relationship Ranking Mathematics in Ask Intros',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '22.4 Connect: obtain consent before consequential action' },
      {
        type: 'paragraph',
        text: 'The product rules define autonomy levels from observing and recommending through drafting, approval, and narrowly authorized execution. The introduction-outcome database migration establishes a two-sided opt-in mechanism: the requester cannot set the other participant’s consent, and an acceptance timestamp is assigned only when both parties opt in. [B1, B13]',
      },
      { type: 'heading2', text: '22.5 Compound: preserve facts learned through action' },
      {
        type: 'paragraph',
        text: 'Ask Intros records introduction stages, meeting results, next steps, and participant-reported outcomes. The danger is contamination: an AI-generated summary must not be interpreted as a verified agreement if no participant confirmed it. [B2, B14-B16]',
      },
      { type: 'heading1', text: '23. Exact Relationship Ranking Mathematics in Ask Intros' },
      { type: 'heading2', text: '23.1 Implemented scoring function' },
      {
        type: 'metadata',
        items: [
          'R: strategic relevance based on shared expertise and industries.',
          'H: how the other party’s stated offers align with the user’s need.',
          'Y: how the user’s offers align with the other party’s stated need.',
          'T: recorded relationship or qualified trust-path evidence.',
          'D: timing from recorded interaction recency.',
          'A: stated availability.',
          'O: smoothed rate of mutually agreed positive outcomes, when admissible.',
          'B: small approved contribution-band bonus.',
        ],
      },
      {
        type: 'equation',
        text: 'S = round( (0.24 − w)R + 0.20H + 0.18Y + 0.18T + 0.12D + 0.08A + wO + B )\nw = min(0.12, 0.12n / (n + 5)) ,   O = 100 · (s + 2) / (n + 4)   for n ≥ 3',
      },
    ],
  },
  {
    pageNumber: 43,
    partLabel: 'Part II',
    chapterTitle: '23. Exact Relationship Ranking Mathematics in Ask Intros',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'The code redistributes weight from strategic relevance to the shared-outcome component; it does not add an unconstrained bonus for prior successes. The implementation file, not the conceptual specification, is the authoritative source for the current formula. [B1, B4, B8]',
      },
      { type: 'heading2', text: '23.2 Example calculation with actual algorithm coefficients' },
      {
        type: 'paragraph',
        text: 'Consider hypothetical inputs R=75, H=80, Y=70, T=60, D=50, and A=90. Suppose eight distinct partner outcomes satisfy the evidence and consent gates, five of which are positive. Then:',
      },
      {
        type: 'equation',
        text: 'w = 0.12 × (8 / 13) = 0.07385 ;     O = 100 × (7 / 12) = 58.33     =>     Total Score = 71 / 100',
      },
      {
        type: 'figure',
        figureType: 'matching_bars',
        caption: 'Figure 15. Reproduction of the weighted example score of 71/100: Their offer fits goal (16.0), Your offer fits need (12.6), Strategic relevance (12.5), Trust path (10.8), Availability (7.2), Timing (6.0), Shared outcomes (4.3), Approved giver boost (1.5).',
      },
      { type: 'heading2', text: '23.3 What the ranking system actually uses as evidence' },
      {
        type: 'paragraph',
        text: 'The implementation evaluates overlap in professional terms and stated interests; it checks a recorded direct connection, qualifying common contacts, member-approved vouches, interaction recency, and stated availability. Free-form “best path” text and listed mutual names do not automatically constitute confirmed edges. [B4]',
      },
    ],
  },
  {
    pageNumber: 44,
    partLabel: 'Part II',
    chapterTitle: '24. Consent-Aware Opportunity Readiness & Compatibility',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '23.4 Calibration questions' },
      {
        type: 'paragraph',
        text: 'The current match score is a deterministic relevance ranking, not a calibrated event probability. If a score band of 70 to 79 were later observed to produce a 40% accepted-introduction rate, that empirical 40% would be separate from the score of 70 to 79.',
      },
      { type: 'heading1', text: '24. Consent-Aware Opportunity Readiness and Company Compatibility' },
      { type: 'heading2', text: '24.1 A separate consent-gated opportunity score' },
      {
        type: 'paragraph',
        text: 'Ask Intros implements an additional Opportunity Readiness engine with the following weights: profile fit 25%, demonstrated need 30%, timing 20%, evidence quality 15%, and engagement 10%. [B5]',
      },
      {
        type: 'equation',
        text: 'S_ready = round( ∑_j w_j a_j x_j  /  ∑_j w_j a_j )',
      },
      {
        type: 'paragraph',
        text: 'The method returns no score if consent to matching is absent, observed weight is below 0.65, or fewer than three valid signals are present. With sufficient information, the implemented bands are high (75 or more), developing (50 to 74), and early (below 50). Missing evidence is not silently treated as average evidence. [B5]',
      },
      { type: 'heading2', text: '24.2 The Golden Fit Report is not the Golden Report' },
      {
        type: 'paragraph',
        text: 'Ask Intros also provides a Golden Fit Report, which is a company-to-company compatibility instrument in its domain engine. This is a different product from Aetheris’ Golden Report financial diagnostic. The Golden Fit implementation weights strategic alignment (25%), mutual value (20%), operating compatibility (20%), relationship trust (15%), timing (10%), and evidence quality (10%). A high Golden Fit score means a strong modeled business-to-business fit under that engine, not confirmation of low operational leakage or guaranteed partnership profitability. [B10]',
      },
    ],
  },
  {
    pageNumber: 45,
    partLabel: 'Part II',
    chapterTitle: '25. Actual Revenue Diagnosis in Ask Intros',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '25. Actual Revenue Diagnosis in Ask Intros' },
      { type: 'heading2', text: '25.1 Independent CRM-based forensic capability' },
      {
        type: 'paragraph',
        text: 'Ask Intros contains a Diagnose capability that operates on the requesting member’s access-controlled CRM context. The source gathers permitted company, opportunity, people, task, activity, decision, and event records through the caller’s row-level-security client. It explicitly captures source-read failures to avoid confusing “unavailable” with “zero records.” For an open opportunity, a 21-day period without a recorded touch triggers investigation. [B9]',
      },
      { type: 'heading2', text: '25.2 Exposure is not a verified loss' },
      {
        type: 'paragraph',
        text: 'For a stalled opportunity with recorded value V and CRM probability p, the current implementation defines:',
      },
      {
        type: 'equation',
        text: 'L_CRM = round(V · p) ,     U_CRM = V',
      },
      {
        type: 'paragraph',
        text: 'For an illustrative $80,000 open opportunity with 40% CRM probability, the displayed range is $32,000 to $80,000. This is a pipeline-exposure heuristic. It is not a statistical confidence interval, not a causal estimate of money lost, and not a measured recovery opportunity. [B9, B11]',
      },
      { type: 'heading2', text: '25.3 A two-reference safeguard' },
      {
        type: 'paragraph',
        text: 'The Diagnose evidence rule requires at least two distinct evidence references for a finding to remain classified as a leak. If fewer than two are available, it is reclassified as Unknown worth checking and its dollar amount is removed. Financial entries without any evidence reference are also stripped of money. [B9, B11, B12]',
      },
      { type: 'heading2', text: '25.4 Financial overlap normalization' },
      {
        type: 'paragraph',
        text: 'The Ask Intros finance module prevents two findings representing the same opportunity from being counted twice. It groups open priced findings by overlap_group and counts only the highest upper bound within each group. [B12]',
      },
    ],
  },
  {
    pageNumber: 46,
    partLabel: 'Part II',
    chapterTitle: '26. Intervention Selection: From Cause Chain to Approved Action',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'For example, assume three open findings have upper bounds of $100,000, $80,000 and $50,000, with the first two sharing the same economic group:',
      },
      {
        type: 'equation',
        text: 'E_gross = 100,000 + 80,000 + 50,000 = 230,000\nE_normalized = max(100,000, 80,000) + 50,000 = 150,000   |   E_overlap = 80,000',
      },
      {
        type: 'paragraph',
        text: 'These exact values are asserted in the repository’s diagnostic tests. If AIFM later combines this $150,000 with a Golden Report ledger, it must reconcile overlapping economic events across products as well. [B11-B12, T2]',
      },
      { type: 'heading1', text: '26. Intervention Selection: From Cause Chain to Approved Action' },
      { type: 'heading2', text: '26.1 Chain of evidence and uncertainty' },
      {
        type: 'paragraph',
        text: 'For an inactivity finding, the Diagnose engine can produce steps describing the open opportunity, elapsed time since the last recorded contact, overdue or missing next actions, and a possible cause explicitly marked unverified. The workflow distinguishes readable results, drafts, proposed writes, approval, and applied actions. [B9, B12]',
      },
      { type: 'heading2', text: '26.2 Not every diagnostic finding requires an introduction' },
      {
        type: 'paragraph',
        text: 'AIFM should select the least disruptive action that can actually test the mechanism. Ask Intros’ design rules include do nothing, monitor, research, reactivate, ask for advice, share useful material, request introduction, schedule a meeting, and close the loop. A message is not the default outcome. [B2]',
      },
      { type: 'heading2', text: '26.3 Proposed cross-system intervention register' },
      {
        type: 'table',
        headers: ['Field', 'Golden Report', 'Mindprint', 'Ask Intros'],
        rows: [
          ['Canonical case & event', 'Root cause and ledger entry', 'Linked company finding', 'Opportunity, intro & action refs'],
          ['Observed source', 'Web or internal record', 'Professional or workflow source', 'CRM, meetings, tasks, consent'],
          ['Candidate mechanism', 'Technical or process finding', 'Decision or coordination evidence', 'Missing action owner, blocker or path'],
        ],
      },
    ],
  },
  {
    pageNumber: 47,
    partLabel: 'Part II',
    chapterTitle: '27. Relationship Routing, Referrals, and the Science of Timing',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'table',
        headers: ['Field', 'Golden Report', 'Mindprint', 'Ask Intros'],
        rows: [
          ['Proposed correction', 'Remediation option', 'Communication/role validation', 'Approval-gated task, meeting or intro'],
          ['Outcome', 'Business metric & reconciled effect', 'Decision and outcome evidence', 'Accepted intro, meeting, transaction'],
        ],
      },
      {
        type: 'paragraph',
        text: 'The research contract must prevent the same paid transaction from being counted as two independent recoveries merely because Golden Report and Ask Intros both reference it.',
      },
      { type: 'heading1', text: '27. Relationship Routing, Referrals, and the Science of Timing' },
      { type: 'heading2', text: '27.1 Warm referral candidate generation is not verified path existence' },
      {
        type: 'paragraph',
        text: 'Ask Intros contains a server-side warm-referral suggestion tool that supplies limited profile and connection context to an AI provider, asks for suggested paths, parses JSON, and matches proposed names back to accessible account IDs where possible. Because the input model can generate names, the proposed path explanation cannot alone prove that the claimed person-to-person link exists. A relationship should be confirmed by authorized graph evidence and the connector’s consent before it is used as a warm route. [B17]',
      },
      { type: 'heading2', text: '27.2 Timing and information decay' },
      {
        type: 'paragraph',
        text: 'Timing in the current match engine uses recorded interaction recency, falling toward zero over its configured observation window. Unavailable recency produces zero rather than imagined current interest. Forensics combines recency with purpose, not recency alone. [B4]',
      },
      { type: 'heading2', text: '27.3 Reciprocity and unequal exposure' },
      {
        type: 'paragraph',
        text: 'The matching code adds a small bonus for an approved, visible giver band, and an evidence-loop module can allocate some recommendation exposure to relevant newcomers. The newcomer mechanism explicitly describes this as exposure allocation, not proof of better match quality. [B4, B8, B18]',
      },
    ],
  },
  {
    pageNumber: 48,
    partLabel: 'Part II',
    chapterTitle: '28. Mindprint Inside Ask Intros & 29. Butler and Meetings',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '28. Mindprint Inside Ask Intros: The Exact Evidence Boundary' },
      { type: 'heading2', text: '28.1 What the personal Mindprint implementation stores' },
      {
        type: 'paragraph',
        text: 'Ask Intros includes its own PersonalMindprint professional baseline adapted from Mindprint’s source and evidence model. It can summarize member-reviewed professional identity, employment history, education, expertise, industries, projects, achievements, offers and needs. Every stored signal is classified as member-confirmed, self-reported evidence. The code explicitly forbids treating the result as a clinical diagnosis or independently verified job-performance record. [B6-B7]',
      },
      { type: 'heading2', text: '28.2 Why the boundary matters to forensic validity' },
      {
        type: 'paragraph',
        text: 'Suppose a member’s approved profile emphasizes rapid decision-making. That provides a professional self-description, not proof that the member will approve a contract quickly. To evaluate a real decision bottleneck, the investigator needs dated approval requests, response records, delegation authority and, where appropriate, the participant’s own explanation. [B6-B7, R17]',
      },
      { type: 'heading1', text: '29. Butler and Meetings: Converting Conversation into Reproducible Evidence' },
      { type: 'heading2', text: '29.1 The pre-meeting brief is source-constrained' },
      {
        type: 'paragraph',
        text: 'Ask Intros’ implemented meeting-brief builder assembles permitted profile details, the user’s recent direct-message context, open asks, personal notes, previous meeting summary, and the introduction’s why_exists, why_now, and first_goal context when available. It proposes one specific meeting objective, prioritizing the stated first goal or a participant’s open need. [B15]',
      },
      { type: 'heading2', text: '29.2 Consent-based meeting observations' },
      {
        type: 'paragraph',
        text: 'The meeting release documentation describes participant permission for microphone recording, transcription and Butler analysis. It states that audio is saved as private speaker clips, video is not',
      },
    ],
  },
  {
    pageNumber: 49,
    partLabel: 'Part II',
    chapterTitle: '30. Introduction Outcome Science: Beyond Counting Connections',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'stored, participants may opt out, and gaps may occur when browsers or providers fail. Butler is documented as reviewing new transcript material approximately once a minute while listening is enabled, producing private summaries and suggested actions without silently creating tasks. [B16]',
      },
      { type: 'heading2', text: '29.3 Memory as an organizational longitudinal instrument' },
      {
        type: 'paragraph',
        text: 'The private Memory Notes feature stores titled notes, dates, context, content, and type in owner-scoped records. A note is only considered saved after a confirmed write. [B19]',
      },
      {
        type: 'callout',
        text: 'AIFM Learning Loop: record an observation -> separate hypothesis -> confirm decision -> record commitment -> check outcome -> update the relevant evidence.',
      },
      { type: 'heading1', text: '30. Introduction Outcome Science: Beyond Counting Connections' },
      { type: 'heading2', text: '30.1 Consent-stamped introduction event' },
      {
        type: 'paragraph',
        text: 'The Ask Intros database contract treats a mutually accepted introduction as the beginning of an outcome record. The acceptance timestamp is server-owned and appears only when both participants have opted in. A requester cannot independently accept on behalf of the other person. [B13]',
      },
      { type: 'heading2', text: '30.2 Outcome-stage taxonomy' },
      {
        type: 'paragraph',
        text: 'The stored outcomes use the following stages: too_early, met, next_step, outcome, and no_outcome. Outcome categories include customer, partnership, hire, investor, advisor, board, vendor, acquisition, knowledge and other. A participant may classify an outcome as direct, influenced, or contextual. The system also supports privacy-safe value bands: undisclosed, under $10,000, $10,000 to $100,000, $100,000 to $1 million, and over $1 million. [B13-B14]',
      },
      { type: 'heading2', text: '30.3 Seven, thirty and ninety-day follow-through' },
      {
        type: 'paragraph',
        text: 'The introduction outcome architecture includes check-ins at seven, thirty, and ninety days after acceptance. These checkpoints allow researchers to distinguish an introduction that was accepted from one that led to a meeting, next action, or business result. [B13, B14, B18]',
      },
    ],
  },
  {
    pageNumber: 50,
    partLabel: 'Part II',
    chapterTitle: '30. Introduction Outcome Science: Funnel Equations',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '30.4 Funnel equations' },
      {
        type: 'paragraph',
        text: 'Define N_I as the number of unique, mutually accepted introductions; N_M as introductions resulting in a verified meeting; N_N as those with a documented next step; and N_O as those with a reported outcome. Then:',
      },
      {
        type: 'equation',
        text: 'p_meet = N_M / N_I ,     p_next = N_N / N_M ,     p_outcome = N_O / N_N',
      },
      { type: 'heading2', text: '30.5 Fully worked illustrative outcome funnel' },
      {
        type: 'paragraph',
        text: 'Consider 100 mutually accepted introductions, of which 65 reach meetings, 30 record a next step, and 12 eventually report a qualifying outcome. Suppose eight of the twelve are commercial outcomes supported by additional transaction records. The descriptive rates are 65% meetings per accepted introduction, 46.2% next steps per meeting, and 40% reported outcomes per next step; overall reported outcomes are 12% of accepted introductions. This is a synthetic research example, not production Ask Intros metrics.',
      },
      {
        type: 'figure',
        figureType: 'outcome_funnel',
        caption: 'Figure 17. Synthetic 100-introduction outcome funnel: Consent-complete introductions (100) -> Meeting reached (65) -> Concrete next step recorded (30) -> Reported outcome (12) -> Commercial outcome within 12 (8).',
      },
      {
        type: 'paragraph',
        text: 'In a valid study, each denominator must identify the same original cohort and observation horizon. Withdrawn consent, incomplete reporting, and unresolved conversations need explicit treatment.',
      },
    ],
  },
  {
    pageNumber: 51,
    partLabel: 'Part II',
    chapterTitle: '31. Relationship Economics: How a Connection Becomes Value',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '31. Relationship Economics: How a Connection Becomes Real Financial Value' },
      { type: 'heading2', text: '31.1 A match score is not a sales probability' },
      {
        type: 'paragraph',
        text: 'Ask Intros has a relevance-scoring function and a relationship outcome ledger. It would be incorrect to calculate 80,000 × 0.71 from a match score of 71 and call $56,800 an expected sale; the score was not designed or validated as a probability. [B4]',
      },
      {
        type: 'callout',
        text: 'Three Distinct Quantities: (1) Relationship relevance score, (2) Estimated event probability from a validated cohort, and (3) Measured economic effect. These may be associated but are not mathematically interchangeable.',
      },
      { type: 'heading2', text: '31.2 Expected value of a consented opportunity pathway' },
      {
        type: 'equation',
        text: 'EV_contribution = N · p_I · p_{M|I} · p_{N|M} · p_{W|N} · R̄ · m − C',
      },
      {
        type: 'paragraph',
        text: 'Here N is the eligible prospect count; p_I is mutually accepted-introduction probability; p_{M|I} is the conditional meeting probability; p_{N|M} is next-step probability after a meeting; p_{W|N} is the probability of a realized won transaction after the next step; R̄ is realized transaction revenue; m is incremental contribution margin; and C is the incremental cost of operating the intervention.',
      },
      { type: 'heading2', text: '31.3 Realized value: count only supported transactions and costs' },
      {
        type: 'equation',
        text: 'V_net = ∑_{k ∈ incremental, verified} (R_k − VC_k) − C_intervention',
      },
      { type: 'heading2', text: '31.4 Avoid double-counting the same underlying business event' },
      {
        type: 'paragraph',
        text: 'The Golden Report may identify a delayed lead as a $120,000 exposure, while Ask Intros may identify a particular CRM opportunity related to that delay as an $80,000 risk. These amounts may describe different views of the same economic pathway. They cannot automatically be summed to $200,000. [T2, B12]',
      },
    ],
  },
  {
    pageNumber: 52,
    partLabel: 'Part II',
    chapterTitle: '32. A Complete Synthetic AIFM + Ask Intros Recovery Investigation',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'equation',
        text: 'V_unique = ∑_{g ∈ G} V_g ,     where each economic event g is recognized once.',
      },
      { type: 'heading1', text: '32. A Complete Synthetic AIFM + Ask Intros Recovery Investigation' },
      { type: 'heading2', text: '32.1 Initial diagnosis' },
      {
        type: 'paragraph',
        text: 'Assume an organization records a $80,000 open opportunity with a CRM win probability of 40%. The last logged activity occurred more than 21 days ago, and a relevant task is overdue. The Ask Intros Diagnose engine can identify the inactivity, document evidence, and classify the risk exposure as $32,000 to $80,000, subject to its evidence safeguards. Golden Report separately identifies a recurring delayed-follow-up mechanism at the organizational level. Mindprint’s role map suggests questions about approval ownership and the information passed between account management and subject-matter experts. [B9, T14-T17]',
      },
      { type: 'heading2', text: '32.2 Verification of the mechanism' },
      {
        type: 'paragraph',
        text: 'Review of authorized CRM records identifies the responsible account owner. An interview confirms that an external technical demonstration requires an expert whom the current account team does not directly know. An existing connection to a knowledgeable intermediary is verified and that intermediary expressly agrees to consider an introduction. The counterparty independently accepts it.',
      },
      { type: 'heading2', text: '32.3 Intervention and recorded result' },
      {
        type: 'paragraph',
        text: 'The owner requests a specific expert discussion, the intermediary consents, the target consents, and the meeting occurs. Ask Intros records a next step and the owner supplies required follow-up material.',
      },
      { type: 'heading2', text: '32.4 Cohort-based illustrative financial test' },
      {
        type: 'paragraph',
        text: 'Consider a separate hypothetical annual cohort of 200 eligible opportunities. Suppose baseline unresolved follow-up occurs in 28% (56 records), while a comparable intervention condition yields 10% (20 records), after a credible comparison adjustment. The difference is 36 additional opportunities receiving effective follow-through. Suppose an empirically supported 20% of those opportunities convert and the average realized sale is $10,000:',
      },
      {
        type: 'equation',
        text: 'ΔR = 36 (0.20) ($10,000) = $72,000     |     ΔP = $72,000 (0.35) = $25,200',
      },
    ],
  },
  {
    pageNumber: 53,
    partLabel: 'Part II',
    chapterTitle: '32. A Complete Synthetic AIFM + Ask Intros Recovery Investigation',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'After $9,000 in incremental workflow, coordination, and implementation costs, net modeled economic benefit is $16,200 and the modeled return on costs is 180%:',
      },
      {
        type: 'equation',
        text: 'ROI = ($25,200 − $9,000) / $9,000 = 1.80 = 180%',
      },
      {
        type: 'figure',
        figureType: 'non_additive',
        caption: 'Figure 16. Economic categories in the worked example (NOT additive): CRM open deal upper exposure ($80.0K), Probability-weighted CRM lower bound ($32.0K), Incremental sales scenario ($72.0K), Incremental contribution ($25.2K), Net benefit after $9K cost ($16.2K).',
      },
      { type: 'heading2', text: '32.5 The case evidence register' },
      {
        type: 'table',
        headers: ['Event', 'Source required', 'What can be asserted', 'What cannot yet be asserted'],
        rows: [
          ['Open opportunity', 'CRM value, stage, owner', 'Pipeline record exists', 'Full amount has been lost'],
          ['21-day inactivity', 'CRM activities and timestamp', 'No recorded touch in sampled records', 'Nobody communicated outside CRM'],
          ['Relationship path', 'Accepted graph edge / owner verification', 'A source-backed route exists', 'Connector will agree'],
          ['Mutual opt-in', 'Server-stamped consent', 'Both parties accepted the introduction', 'A purchase will follow'],
          ['Meeting', 'Attendance & authorized meeting record', 'Meeting occurred', 'The discussion caused a sale'],
          ['Deal won', 'Contract, invoice or transaction', 'Commercial outcome occurred', 'It was incremental to the intervention'],
          ['Net recovery', 'Margins, costs, comparison evidence', 'Attributable benefit under stated method', 'Full face value equals profit'],
        ],
      },
    ],
  },
  {
    pageNumber: 54,
    partLabel: 'Part II',
    chapterTitle: '33. Time Savings & 34. Research Design',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: '33. Time Savings, Operational Capacity and Network Value' },
      { type: 'heading2', text: '33.1 The private time ledger' },
      {
        type: 'paragraph',
        text: 'Ask Intros’ evidence-loop release describes a private, member-initiated time ledger that records active work sessions while excluding hidden tabs and idle periods above its configured threshold. At least three comparable reported observations qualify for the observed-comparison bucket. [B18]',
      },
      {
        type: 'equation',
        text: 'Δt = t_baseline − t_after ,     H_annual = Δt × N_annual',
      },
      {
        type: 'paragraph',
        text: 'However, timing savings are not automatically cash savings. If they do not reduce paid overtime, prevent hiring, or increase throughput with demonstrated demand, the value should be recorded as capacity released, not recovered money. [T10, B18]',
      },
      { type: 'heading2', text: '33.2 Modeling relationship friction as a resource cost' },
      {
        type: 'paragraph',
        text: 'Relationship work can incur measurable coordination effort: searching for suitable people, verifying identity, waiting for consent, preparing meetings, correcting misunderstandings, and reconnecting forgotten discussions. An introduction that requires consent and preparation can take longer than an unverified mass message yet still produce superior outcomes.',
      },
      { type: 'heading1', text: '34. Research Design: Does Ask Intros Add Incremental Value?' },
      { type: 'heading2', text: '34.1 The empirical estimand' },
      {
        type: 'equation',
        text: 'ATE = E[ Y_i(1) − Y_i(0) ]',
      },
      {
        type: 'paragraph',
        text: 'where Y_i(1) and Y_i(0) are the potential outcomes under integrated and comparison conditions for case i. Random allocation, credible matching, or a suitable quasi-experimental design is needed to estimate the difference [R8-R9, R18].',
      },
    ],
  },
  {
    pageNumber: 55,
    partLabel: 'Part II',
    chapterTitle: '34. Research Design: Three-Arm Study',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'figure',
        figureType: 'three_arm',
        caption: 'Figure 19. Proposed comparative evaluation: Arm A (Standard process: Existing CRM / manual follow-up) | Arm B (Forensic diagnosis: Golden + Mindprint evidence) | Arm C (Integrated execution: Golden + Mindprint + Ask Intros) -> Independent Outcome Assessment.',
      },
      { type: 'heading2', text: '34.2 Three-arm study' },
      {
        type: 'metadata',
        items: [
          'Arm A: Standard follow-up. Existing CRM, conventional relationship practices, and ordinary meeting documentation.',
          'Arm B: Forensic diagnosis. Golden Report plus authorized Mindprint evidence, without Ask Intros matching or relationship interventions.',
          'Arm C: Integrated execution. The same forensic materials as Arm B, supplemented by evidence-based Ask Intros matching, consented introductions, meeting preparation, commitment tracking and outcome verification.',
        ],
      },
      { type: 'heading2', text: '34.3 Primary outcomes and secondary mechanisms' },
      {
        type: 'paragraph',
        text: 'The recommended primary commercial outcome is incremental, verified contribution value per eligible case after intervention costs, with explicit treatment of censoring and cases lacking permissioned financial records. Secondary outcomes should include time to first relevant conversation, fraction of mutually accepted introductions, completed meetings per accepted introduction, documented next-step rate, factual accuracy of meeting briefs, consent violations, and customer-reported usefulness.',
      },
      { type: 'heading2', text: '34.4 Network interference and clustering' },
      {
        type: 'paragraph',
        text: 'Unlike isolated marketing experiments, introductions create network interference: the treatment assigned to one member may affect other members through shared intermediaries, attention',
      },
    ],
  },
  {
    pageNumber: 56,
    partLabel: 'Part II',
    chapterTitle: '35. Implementation Reality and Critical Integration Boundaries',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'paragraph',
        text: 'constraints, or reciprocal introductions. Researchers may need to randomize at company, team, geographic cohort or network-cluster level, and report spillovers [R14-R16].',
      },
      { type: 'heading2', text: '34.5 Quantitative audit metrics' },
      {
        type: 'table',
        headers: ['Measure', 'Formula or definition', 'Error to avoid'],
        rows: [
          ['Verified introduction rate', 'Mutually accepted unique intros / eligible requests', 'Counting one-sided requests as accepted'],
          ['Meeting conversion', 'Verified meetings / mature accepted-intro cohort', 'Including immature cases in denominator'],
          ['Meaningful next-step rate', 'Confirmed next steps / completed meetings', 'Counting AI drafts as commitments'],
          ['Ninety-day outcome rate', 'Confirmed outcomes / mature 90-day cohort', 'Selective follow-up of successes'],
          ['Diagnosed exposure', 'Unique modeled financial findings with overlap rules', 'Treating open pipeline as lost cash'],
          ['Verified incremental revenue', 'Additional realized sales supported by design', 'Treating deal face values as causal increments'],
          ['Net economic value', 'Incremental contribution + avoided expense − costs', 'Adding collected receivables twice'],
          ['Source integrity', 'Findings with independent verifiable evidence / total', 'Counting duplicate screenshots as independent'],
          ['Consent integrity', 'Authorized actions / all consequential external actions', 'Treating membership as blanket permission'],
        ],
      },
      { type: 'heading1', text: '35. Implementation Reality and the Critical Integration Boundaries' },
      { type: 'heading2', text: '35.1 Existing implementation versus proposed product integration' },
      {
        type: 'paragraph',
        text: 'Ask Intros is not merely a conceptual networking directory. The reviewed repository contains implemented code for CRM diagnosis, financial overlap control, consent-aware matching, member-confirmed professional baselines, Butler’s owner-scoped data reads, meeting briefs, and introduction outcome records. [B4-B16]',
      },
      {
        type: 'paragraph',
        text: 'However, the current review does not establish that every advanced source migration is active on the hosted system, that all connected providers are configured, or that Ask Intros automatically imports and synchronizes the full Golden Report financial ledger. [B10, B20-B22]',
      },
    ],
  },
  {
    pageNumber: 57,
    partLabel: 'Part II',
    chapterTitle: '36. Extended Scientific Conclusions',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: '35.2 Proposed integration requirements' },
      {
        type: 'paragraph',
        text: 'A robust three-system integration should implement scoped linking among: Golden Report report hash and root-cause IDs; Mindprint approved evidence and role link IDs; Ask Intros opportunity, introduction, decision, meeting and outcome IDs; and a single canonical economic event ID for financial reconciliation.',
      },
      {
        type: 'paragraph',
        text: 'An integration pipeline should perform: (1) authenticated import; (2) company identity reconciliation; (3) provenance verification; (4) role and permission review; (5) economic overlap detection; (6) proposed action creation; (7) participant opt-in; (8) outcome event ingestion; (9) financial validation; and (10) audit log retention.',
      },
      { type: 'heading2', text: '35.3 Security, privacy and irreversibility' },
      {
        type: 'paragraph',
        text: 'Only the information strictly necessary for a specific task should cross from a private Mindprint or organizational report into an introduction or meeting brief. Public impact reporting should suppress small counts and private identities; the application implements a fewer-than-three suppression rule in its reporting helpers. [B6-B7, B16, B23]',
      },
      { type: 'heading1', text: '36. Extended Scientific Conclusions' },
      {
        type: 'paragraph',
        text: 'The Ask Intros source code establishes that the Aetheris forensic methodology has a plausible third implementation layer: structured interaction between observed operational needs and evidence-guided relationships, followed by consent, action, recorded outcomes and learning.',
      },
      {
        type: 'paragraph',
        text: 'First, the system supports distinguishing a qualified business need from broad networking activity. Second, its deterministic scoring and opportunity models make assumptions inspectable. Third, its revenue diagnosis engine can identify specific stalled opportunities. Fourth, its consent and outcome architecture can track whether a recommendation advanced through real stages. Fifth, its record of outcomes makes it possible to prospectively evaluate whether the interventions add economic value.',
      },
      {
        type: 'callout',
        text: 'Extended AIFM Thesis: A business problem can be investigated through organizational evidence, explained through verified work and relationship mechanisms, addressed through proportionate and consented action, and assessed through independently reproducible economic outcomes.',
      },
    ],
  },
  {
    pageNumber: 58,
    partLabel: 'Part II',
    chapterTitle: '36. Extended Scientific Conclusions',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'callout',
        text: 'The three-system method should be judged by how often it selects the correct intervention and produces measurable, attributable net improvement, not by how many scans, relationship recommendations, AI messages, or introductions it generates.',
      },
    ],
  },
  {
    pageNumber: 59,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix A. Minimum Research Data Dictionary',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: 'Appendix A. Minimum Research Data Dictionary' },
      {
        type: 'paragraph',
        text: 'The following is a recommended research schema that extends the fields visible in Golden Report and Mindprint. It should be implemented using tenant-scoped identifiers and appropriate access control.',
      },
      {
        type: 'table',
        headers: ['Dataset', 'Essential fields', 'Why it matters'],
        rows: [
          ['organization', 'org_id, primary_domain, industry, country, reporting_currency', 'Prevent incorrect grouping and cross-company contamination.'],
          ['scan', 'scan_id, org_id, started_at, completed_at, report_version, compiler_version', 'Distinguish repeat assessment from independent company.'],
          ['source', 'source_id, org_id, source_type, URI, capture_time, content_hash, consent_basis', 'Reconstruct what was actually observed and when.'],
          ['claim', 'claim_id, source_id, text, status, confidence_label, limitations', 'Keep evidence provenance distinct from conclusion.'],
          ['finding', 'finding_id, org_id, claim_ids, mechanism_id, status, alternatives', 'Define the analytical unit and candidate explanation.'],
          ['mechanism', 'mechanism_id, category, operational_definition, causal_assumptions', 'Deduplicate equivalent descriptions.'],
          ['work_link', 'role_a, role_b, relation, evidence_ids, confirmed, valid_from', 'Distinguish verified relationships from inferred ones.'],
          ['decision', 'decision_id, alternatives, approved_action, owner, decision_date', 'Connect interventions to specific decisions.'],
          ['event', 'case_id, activity, event_time, role, system, outcome', 'Reconstruct actual execution and delays.'],
          ['revenue', 'transaction_id, cohort_id, realized_amount, costs, margin_basis', 'Verify incremental transactions and contribution.'],
          ['labor', 'activity_id, hours, pay_basis, overtime_paid, cost_center', 'Separate capacity from cash savings.'],
          ['billing', 'work_id, contract, invoice_id, receivable_id, receipt_id', 'Prevent double recognition of invoice and cash collection.'],
          ['intervention', 'intervention_id, mechanism_id, launch_date, owner, cost, control_group', 'Identify what changed and when.'],
          ['outcome', 'metric_id, population, baseline, actual, unit, confidence_interval', 'Provide reproducible pre/post measurement.'],
          ['recovery', 'recovery_id, economic_class, amount, accounting_basis, review_status', 'Prevent summing non-equivalent dollars.'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Every finance-linked event should preserve the original source reference and a machine-reproducible transformation chain.',
      },
    ],
  },
  {
    pageNumber: 60,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix B & Appendix C',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: 'Appendix B. Reporting Standards for Every Dollar Figure' },
      {
        type: 'metadata',
        items: [
          '1. What is the mechanism? Describe the exact process, rule, data dependency, or interaction at issue.',
          '2. What is directly observed? List source IDs, event records, and observation windows.',
          '3. What remains a hypothesis? Identify assumptions and competing mechanisms.',
          '4. What is the eligible population? Define inclusion, exclusion, duplicate treatment, and censoring.',
          '5. What is the baseline? Provide the observed metric, its denominator, and period.',
          '6. What is the valid comparator? Specify randomized control, matched reference, benchmark, or scenario.',
          '7. What is the estimated effect? Show the equation and the estimated uncertainty.',
          '8. What financial class is affected? Distinguish gross sales, contribution, cash cost, receivables, or capacity.',
          '9. How are overlaps controlled? Reference other findings and show why the amount is counted once.',
          '10. What is the correction? Identify intervention owner, deployment date, expected change, and cost.',
          '11. What improved? Show post-intervention outcome on a comparable population.',
          '12. What is realized? Link to actual sales transactions, paid costs, or receipts.',
          '13. What is still unproven? State unobserved assumptions, missing source data, and causal limits.',
          '14. Who reviewed the claim? Record independent financial and methodological signoff.',
        ],
      },
      { type: 'heading1', text: 'Appendix C. Example Audit-Ready Recovery Register' },
      {
        type: 'table',
        headers: ['Recovery field', 'Synthetic example value', 'Evidence that a real case would require'],
        rows: [
          ['Case ID', 'F01', 'Company-scoped unique mechanism ID'],
          ['Economic class', 'Incremental sales', 'General ledger / realized revenue records'],
          ['Population', '5,000 eligible leads', 'Deduplicated lead IDs and inclusion SQL'],
          ['Baseline rate', '10.0%', 'Preperiod won/eligible calculation'],
          ['Treated post rate', '12.6%', 'Postperiod won/eligible calculation'],
          ['Control pre / post rate', '12.0% / 13.0%', 'Comparable control cohort, same outcome definition'],
        ],
      },
    ],
  },
  {
    pageNumber: 61,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix D. Reproducible Analytical Pseudocode',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'table',
        headers: ['Recovery field', 'Synthetic example value', 'Evidence that a real case would require'],
        rows: [
          ['Adjusted effect', '1.6 percentage points', 'Prespecified DiD analysis and assumptions'],
          ['Average sale', '$4,000', 'Actual realized transaction values'],
          ['Gross uplift', '$320,000', 'Source-backed formula and transaction table'],
          ['Incremental margin', '35%', 'Marginal cost analysis'],
          ['Contribution benefit', '$112,000', '$320,000 × 0.35'],
          ['Intervention', 'Ownership & qualification correction', 'Deployment log / versioned configuration'],
          ['Status', 'Synthetic scenario', 'Not a verified recovery'],
        ],
      },
      { type: 'heading1', text: 'Appendix D. Reproducible Analytical Pseudocode' },
      {
        type: 'code',
        text: `INPUT: authorized company reports, sources, event logs, work links,
       finance records, intervention history, accounting policy

1. Validate organization identity and data permissions.
2. Preserve original report versions and source hashes.
3. Extract observations; assign each source a unique ID.
4. Separate verified observation from inferred root-cause hypothesis.
5. Normalize root-cause terms against a versioned ontology.
6. Build an evidence graph; reject cross-company links.
7. Import Golden findings as hypotheses, not as verified facts.
8. Import only confirmed workplace relationships with cited evidence.
9. For each mechanism, define eligible population and counterfactual.
10. Calculate economic exposure using company-specific denominators.
11. Classify financial basis: measured / model / scenario / unknown.
12. Deduplicate all overlapping mechanisms and source transactions.
13. Reconcile sums to unique active finance entries.
14. Prioritize candidate interventions using expected NET economic value.
15. Record implementation, cost, and control or comparison method.
16. Re-measure primary outcomes; estimate attributable effect.
17. Reconcile sales, contribution, expense avoidance, and collections.
18. Save confidence, competing explanations, and independent review.
OUTPUT: versioned case file, evidence graph, finance ledger,
        intervention record, and reproducible recovery statement`,
      },
    ],
  },
  {
    pageNumber: 62,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix D.1 SQL & Appendix E. Failure Modes',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading2', text: 'D.1 Example corpus extraction logic' },
      {
        type: 'code',
        text: `-- Reports per represented company; preserve repeated observations.
SELECT company_id, COUNT(DISTINCT scan_id) AS report_count
FROM golden_report_archive
GROUP BY company_id;

-- Distinguish report frequency from unique-company frequency.
SELECT
  COALESCE(NULLIF(root_cause_title, ''), title) AS pattern_label,
  COUNT(*) AS indexed_occurrences,
  COUNT(DISTINCT scan_id) AS reports_with_pattern,
  COUNT(DISTINCT company_id) AS companies_with_pattern
FROM golden_report_findings_index
WHERE COALESCE(root_cause_title, title) IS NOT NULL
GROUP BY COALESCE(NULLIF(root_cause_title, ''), title);`,
      },
      { type: 'heading1', text: 'Appendix E. Model Failure Modes and Controls' },
      {
        type: 'table',
        headers: ['Failure mode', 'Consequence', 'Recommended control'],
        rows: [
          ['Generic template priced as company-specific', 'Fictitious or exaggerated loss', 'Source-specific observations and template detector.'],
          ['Same loss counted in several chapters', 'Inflated total', 'Canonical root-cause ledger and chapter ownership.'],
          ['“Measured” inferred from wording alone', 'False certainty', 'Require source-record IDs and reproducible calculation.'],
          ['Ten repeat scans treated as ten companies', 'Inflated prevalence', 'Deduplicate by verified company ID.'],
          ['Same profile text reused as independent evidence', 'Artificial corroboration', 'Source lineage and independence checks.'],
          ['Job title treated as authority relationship', 'Wrong causal narrative', 'Confirm links with policy or workflow records.'],
          ['Language pattern treated as personality certainty', 'Unfair or inaccurate judgments', 'Source-bounded hypotheses and human review.'],
          ['Revenue counted as profit', 'Overstated ROI', 'Incremental contribution accounting.'],
          ['Receivable collection counted again as new income', 'Double recognition', 'Separate P&L and cash-flow registers.'],
        ],
      },
    ],
  },
  {
    pageNumber: 63,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix F. Technical Primary Sources [T1–T6]',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'table',
        headers: ['Failure mode', 'Consequence', 'Recommended control'],
        rows: [
          ['Capacity freed but payroll unchanged', 'Imaginary savings', 'Actual expense or incremental output proof.'],
          ['Simultaneous interventions credited for same uplift', 'Duplicate recovery', 'Cohort isolation or explicit shared attribution.'],
          ['Model version changes between scans', 'False improvement trend', 'Preserve model and report version history.'],
          ['Control differs in seasonality or lead quality', 'Biased causal effect', 'Pre-trend checks and matched comparison.'],
          ['Only positive outcomes published', 'Inflated effectiveness', 'Register all eligible cases, including failures.'],
          ['Synthetic examples blended with customer results', 'Misleading communication', 'Mandatory evidence classification on every figure.'],
        ],
      },
      { type: 'heading1', text: 'Appendix F. Technical Primary Sources' },
      {
        type: 'metadata',
        items: [
          '[T1] Aetheris Technology, production roadmap (October 29, 2026). Repository engineering record reporting the Golden Report archive counts and Collective Brain deployment status. github.com/militarygradeinsulation-hue/aetheristechnology/.../roadmap.md',
          '[T2] Aetheris Technology, Golden Report Collective Brain migration (2026). Aggregation definitions for patterns, pairs, industry patterns, and archive statistics. supabase/migrations/20261029171000_golden_report_collective_brain.sql',
          '[T3] Aetheris Technology, canonical Financial Leak Ledger, Version 6 (2026). Pricing basis, deduplication, chapter ownership, reconciliation, and numeric guardrails. supabase/functions/_shared/golden-ledger.ts',
          '[T4] Aetheris Technology, Golden Report compiler (2026). Claim statuses, evidence metadata, source linking, root-cause records, and financial finding representation. supabase/functions/_shared/golden-compiler.ts',
          '[T5] Aetheris Technology, generic/template-report detector (2026). Company-evidence guardrails and rejection of generic default ranges. supabase/functions/_shared/golden-generic-detector.ts',
          '[T6] Aetheris Technology, financial money taxonomy (2026). Distinctions among annual loss, source evidence, investment, and recovery scenarios. supabase/functions/_shared/golden-money-taxonomy.ts',
        ],
      },
    ],
  },
  {
    pageNumber: 64,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix F. Technical Primary Sources [T7–T17]',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'metadata',
        items: [
          '[T7] Aetheris Technology, Golden Report archive (2026). Scan identity, report history, aggregate summaries, and findings indexing. supabase/functions/_shared/golden-archive.ts',
          '[T8] Aetheris Technology, Golden Report financial regression tests (2026). Deterministic money parsing, no-double-count and surface-parity fixtures. src/lib/goldenLeakage.test.ts',
          '[T9] Aetheris Technology, custom Leak Audit flow (2026). Four-category intake, frozen company self-report baseline, and limits of unverified recommendations. docs/operations/COMPANY_LEAK_CUSTOM_SOLUTIONS.md',
          '[T10] Aetheris Technology, standalone Business X-Ray research specification (2026). Self-report assumptions, deterministic component pricing, capacity overlap caps, and explicit lack of verification in free mode. apps/business-xray/README.md',
          '[T11] Aetheris Technology, revenue diagnostic methodology generator (2026). Twelve-month baseline, attribution, financial source appendix, and operator-led review. src/lib/generateMethodologyPdf.ts',
          '[T12] Aetheris Technology, case recovery amount file (2026). Website case-study dollar labels, requiring independent financial provenance review. src/data/caseRecovery.ts',
          '[T13] Aetheris Technology, fifty external case-study summaries (2026). Published outside examples mapped to Aetheris problem/fix patterns; not Aetheris-client evidence. src/data/realCaseStudies.ts',
          '[T14] Aetheris Technology, Mindprint evidence graph (2026). Evidence types, findings, relationship confirmation, consent, and outcome records. src/lib/mindprint/intelligence/evidence-graph.ts',
          '[T15] Aetheris Technology, Mindprint Golden Report evidence import (2026). Imports findings as hypotheses. src/lib/mindprint/intelligence/golden-evidence-import.ts',
          '[T16] Aetheris Technology, Mindprint workflow evidence import (2026). Role connection evidence and confirmation requirements. src/lib/mindprint/intelligence/workflow-evidence.ts',
          '[T17] Aetheris Technology, Mindprint company graph composition (2026). Combined Golden Report, workflow, decisions, and outcomes. src/lib/mindprint/intelligence/company-evidence-graph.ts',
        ],
      },
    ],
  },
  {
    pageNumber: 65,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix G & Appendix H',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'metadata',
        items: [
          '[T18] Aetheris Technology, Mindprint implementation roadmap (2026). Engineering validation, collaboration tests, and declared release limitations. docs/mindprint-intelligence-implementation.md',
          '[T19] Aetheris Technology. (2026, October 30). Joseph Toney: MINDPRINT Intelligence Report, Version 2. Internal system-generated PDF, 21 pages. Supplied as the primary report artifact for this research synthesis.',
        ],
      },
      { type: 'heading1', text: 'Appendix G. Cross-System Economic Event and Evidence Contract' },
      {
        type: 'paragraph',
        text: 'An integrated case should preserve a common case_id, normalized company_id, optional opportunity_id, unique economic_event_id, root-cause IDs, source records, independent-source groups, currency, period, financial category, valuation model version, owner approval, action IDs, introduction IDs, consent states, decision records, outcome references, and a reproducible audit calculation.',
      },
      {
        type: 'paragraph',
        text: 'The economic event must have one of four main states: unpriced, modeled exposure, observed operational improvement, or verified realized value. A record may possess more than one descriptive view but only one canonical financial owner.',
      },
      { type: 'heading1', text: 'Appendix H. Replication Checklist for an Ask Intros Forensic Study' },
      {
        type: 'metadata',
        items: [
          '• Record repository branch and commit hashes for all three products.',
          '• Validate source and economic-event identity across imports.',
          '• Verify app and database permissions with two independent member accounts.',
          '• Reproduce two-reference downgrade and missing-evidence suppression tests.',
          '• Reproduce the $100K / $80K / $50K overlap fixture with one shared group.',
          '• Confirm cross-currency refusal and financial classification filtering.',
          '• Recalculate match weights and smoothed outcomes for a known synthetic fixture.',
          '• Reproduce the consent-gated readiness score and missing-signal behavior.',
          '• Verify neither introduction participant can forge the other’s approval.',
          '• Record the introduction acceptance timestamp from the server.',
          '• Confirm 7-, 30- and 90-day follow-up cohorts and authorized outcome visibility.',
          '• Separate reported deal value, collected revenue, gross margin and attributable profit.',
        ],
      },
    ],
  },
  {
    pageNumber: 66,
    partLabel: 'Appendices',
    chapterTitle: 'Appendix H. Replication Checklist (Continued)',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'metadata',
        items: [
          '• Test whether missing source data produces unknown, not zero.',
          '• Verify old, private and revoked evidence remains excluded from new recommendations.',
          '• Preserve code, query and financial model versions with the final study dataset.',
          '• Obtain external review of intervention effect, accounting treatment, and privacy scope.',
        ],
      },
    ],
  },
  {
    pageNumber: 67,
    partLabel: 'Appendices',
    chapterTitle: 'References: Ask Intros Technical Primary Sources [B1–B12]',
    runningHeader: HEADER,
    blocks: [
      { type: 'heading1', text: 'References: Ask Intros Technical Primary Sources' },
      {
        type: 'metadata',
        items: [
          '[B1] Ask Intros architecture. Product question, five-step loop, relational entities, conceptual scoring and autonomy boundaries. docs/ARCHITECTURE.md',
          '[B2] Ask Intros AI rules. Why Them, Why You, Why Now; no invented relationships or money; next-best-action and outcome memory protocol. docs/AI_RULES.md',
          '[B3] Ask Intros product overview. Intended product scope and demonstration integration boundaries. docs/AETHERIS_README.md',
          '[B4] Ask Intros matching implementation. Current weighted match score, trust path, recency, availability, and evidence explanation. src/aetheris/matching.ts',
          '[B5] Opportunity Readiness engine. Factor weights, evidence coverage, and consent gates. src/aetheris/domain/opportunity-intelligence.ts',
          '[B6] Personal Mindprint source. Member-approved professional evidence, unknowns and Butler context safeguards. src/aetheris/personal-mindprint.ts',
          '[B7] Personal Mindprint save and Butler read tools. Owner-scoped identity check and private memory access. src/lib/personalMindprint.functions.ts ; src/lib/butler-tools.server.ts',
          '[B8] Evidence-loop matching model. Outcome smoothing, newcomer allocation, and conditional shared-evidence weighting. src/features/evidence-loop/matching.ts',
          '[B9] Diagnose capability. CRM-based stale opportunity, cause-chain hypotheses, evidence, and proposals. src/lib/capabilities/diagnose.server.ts',
          '[B10] Golden Fit company compatibility model. Distinct from the Aetheris Golden Report. src/aetheris/domain/engine.ts',
          '[B11] Diagnose regression tests. Evidence downgrade, $40K fixture, overlap normalization and unsupported providers. src/aetheris/capabilities/tests/diagnose.test.ts',
          '[B12] Financial exposure and finding contracts. Group normalization, risk classifications, cause chain, baseline and recovery fields. src/aetheris/capabilities/finance.ts',
        ],
      },
    ],
  },
  {
    pageNumber: 68,
    partLabel: 'Appendices',
    chapterTitle: 'References: Ask Intros [B13–B23] & Scholarship [R1–R2]',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'metadata',
        items: [
          '[B13] Introduction outcome database contract. Two-party consent integrity, acceptance stamp, outcome privacy and follow-up events. drizzle/migrations/0022_introduction_outcome_spine.sql',
          '[B14] Introduction outcomes module. Stage, attribution, category, value bands and check-ins. src/aetheris/outcomes.ts',
          '[B15] Pre-meeting brief builder. Source-limited participant context, messages, prior meetings and first-goal selection. src/aetheris/meeting-brief.ts',
          '[B16] Meeting and Butler release specification. Participant consent, audio/transcript boundaries, summaries and validation limits. docs/MEETING_BUTLER_DISCOVERY_RELEASE.md',
          '[B17] Warm referral suggestion code. AI-generated suggested paths, name resolution and user-scoped suggestion storage. src/lib/warmReferral.functions.ts',
          '[B18] Evidence-loop release. Consent-dependent outcomes, 3-partner smoothing gate, time ledger and production activation limits. docs/release-safety/EVIDENCE_LOOP_2026_10_26.md',
          '[B19] Butler memory notes documentation. Owner-scoped structured notes, exact-ID recall, save confirmation and deployment caveat. docs/MEMORY_NOTES.md',
          '[B20] Product readiness audit. Production and local module separation; schema and provider limitations. docs/PRODUCT_READINESS_AUDIT.md',
          '[B21] Connection and memory audit. Security observations, missing schema contracts, and release limits, October 25, 2026. docs/CONNECTION_MEMORY_SECURITY_AUDIT_2026_10_25.md',
          '[B22] Business Tools evidence engine. Public-page source capture and prohibition on fabricated revenue or full-site claims. src/lib/businessTools.engine.ts',
          '[B23] Network Impact Report. Small-number suppression and withheld deal-value totals for undersized samples. src/aetheris/impact.ts',
        ],
      },
      { type: 'heading1', text: 'References: Independent Scholarship and External Evidence' },
      {
        type: 'metadata',
        items: [
          '[R1] Galbraith, J. R. (1974). Organization design: An information processing view. Interfaces, 4(3), 28-36.',
          '[R2] Trist, E. L., & Bamforth, K. W. (1951). Some social and psychological consequences of the longwall method of coal-getting. Human Relations, 4(1), 3-38.',
        ],
      },
    ],
  },
  {
    pageNumber: 69,
    partLabel: 'Appendices',
    chapterTitle: 'References: Independent Scholarship [R3–R18]',
    runningHeader: HEADER,
    blocks: [
      {
        type: 'metadata',
        items: [
          '[R3] Daft, R. L., & Lengel, R. H. (1986). Organizational information requirements, media richness and structural design. Management Science, 32(5), 554-571.',
          '[R4] van der Aalst, W. M. P. (2012). Process mining: Overview and opportunities. ACM Transactions on Management Information Systems, 3(2), Article 7.',
          '[R5] Cross, R., Borgatti, S. P., & Parker, A. (2002). Making invisible work visible: Using social network analysis to support strategic collaboration. California Management Review, 44(2), 25-46.',
          '[R6] Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350-383.',
          '[R7] Pearl, J. (2009). Causality: Models, Reasoning, and Inference (2nd ed.). Cambridge University Press.',
          '[R8] Hernan, M. A., & Robins, J. M. (2020). Causal Inference: What If. Chapman & Hall/CRC.',
          '[R9] Roth, J., Sant’Anna, P. H. C., Bilinski, A., & Poe, J. (2023). What’s trending in difference-in-differences? A synthesis of the recent econometrics literature. Journal of Econometrics, 235(2), 2218-2244.',
          '[R10] Oldroyd, J. B., McElheran, K., & Elkington, D. (2011). The short life of online sales leads. Harvard Business Review, 89(3).',
          '[R11] National Institute of Standards and Technology. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0). NIST AI 100-1.',
          '[R12] Unbounce. (n.d.). How New Balance doubled in-store sales with mobile landing pages. Vendor-reported case study.',
          '[R13] Bangia, M., Cruz, G., Huber, I., Landauer, P., & Sunku, V. (2020, May 13). Sales automation: The key to boosting revenue and reducing costs. McKinsey & Company.',
        ],
      },
      { type: 'heading1', text: 'References: Additional Independent Scholarship' },
      {
        type: 'metadata',
        items: [
          '[R14] Granovetter, M. S. (1973). The strength of weak ties. American Journal of Sociology, 78(6), 1360-1380.',
          '[R15] Burt, R. S. (2004). Structural holes and good ideas. American Journal of Sociology, 110(2), 349-399.',
          '[R16] Aral, S., & Van Alstyne, M. (2011). The diversity-bandwidth trade-off. American Journal of Sociology, 117(1), 90-171.',
          '[R17] Mayer, R. C., Davis, J. H., & Schoorman, F. D. (1995). An integrative model of organizational trust. Academy of Management Review, 20(3), 709-734.',
          '[R18] Athey, S., & Imbens, G. W. (2017). The econometrics of randomized experiments. In Handbook of Field Experiments (Vol. 1, pp. 73-140). Elsevier.',
        ],
      },
    ],
  },
];
