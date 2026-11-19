import { NextRequest, NextResponse } from 'next/server';
import { getDatabaseAsync, saveDatabaseAsync, logAdminActivity, defaultCMSData } from '@/lib/server-db';

function checkAuth(req: NextRequest): boolean {
  const session = req.cookies.get('super_sand_admin_session');
  return session?.value === 'authenticated_session_token_2026';
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = await getDatabaseAsync();
  return NextResponse.json({ success: true, data: db });
}

export async function PUT(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { action, payload } = await req.json();
    const db = await getDatabaseAsync();

    switch (action) {
      // 1. Site Info
      case 'update_site_info':
        db.siteInfo = { ...db.siteInfo, ...payload };
        logAdminActivity('UPDATE_SITE_INFO', 'About & Corporate', 'Updated corporate profile & legacy info');
        break;

      // 2. Hero Slides
      case 'update_hero_slides':
        db.heroSlides = payload;
        logAdminActivity('UPDATE_HERO_SLIDES', 'Home Manager', 'Updated hero carousel slides & backgrounds');
        break;

      // 3. Quality Highlights
      case 'update_quality_highlights':
        db.qualityHighlights = payload;
        logAdminActivity('UPDATE_HIGHLIGHTS', 'Home Manager', 'Updated 4 quality highlights');
        break;

      // 4. Why Choose Us
      case 'update_why_choose_us':
        db.whyChooseUs = payload;
        logAdminActivity('UPDATE_WHY_CHOOSE_US', 'Home Manager', 'Updated Why Choose Us 6 pillars');
        break;

      // 5. Board of Directors
      case 'update_directors':
        db.directors = payload;
        logAdminActivity('UPDATE_DIRECTORS', 'About Manager', 'Updated Board of Directors profiles & photos');
        break;

      // 6. Who We Are Team Cards
      case 'update_team_cards':
        db.teamCards = payload;
        logAdminActivity('UPDATE_TEAM_CARDS', 'About Manager', 'Updated Who We Are engineering & workforce cards');
        break;

      // 7. Team Collective
      case 'update_team_collective':
        db.teamCollective = { ...db.teamCollective, ...payload };
        logAdminActivity('UPDATE_TEAM_COLLECTIVE', 'Team Manager', 'Updated Team Collective culture copy & photo');
        break;

      // 8. Products
      case 'update_products':
        db.products = payload;
        logAdminActivity('UPDATE_PRODUCTS', 'Products Manager', 'Saved changes to products list');
        break;

      case 'add_product':
        db.products = [payload, ...(db.products || [])];
        logAdminActivity('ADD_PRODUCT', 'Products Manager', `Created new product: ${payload.name}`);
        break;

      case 'delete_product':
        db.products = db.products.filter((p) => p.id !== payload.id);
        logAdminActivity('DELETE_PRODUCT', 'Products Manager', `Deleted product ID: ${payload.id}`);
        break;

      // 9. Services
      case 'update_services':
        db.services = payload;
        logAdminActivity('UPDATE_SERVICES', 'Services Manager', 'Saved changes to services');
        break;

      case 'add_service':
        db.services = [payload, ...(db.services || [])];
        logAdminActivity('ADD_SERVICE', 'Services Manager', `Added new service: ${payload.title}`);
        break;

      case 'delete_service':
        db.services = db.services.filter((s) => s.id !== payload.id);
        logAdminActivity('DELETE_SERVICE', 'Services Manager', `Deleted service ID: ${payload.id}`);
        break;

      // 10. Operations Gallery
      case 'update_gallery':
        db.gallery = payload;
        logAdminActivity('UPDATE_GALLERY', 'Gallery Manager', 'Updated operations gallery items');
        break;

      case 'add_gallery_item':
        db.gallery = [payload, ...(db.gallery || [])];
        logAdminActivity('ADD_GALLERY_ITEM', 'Gallery Manager', `Added new gallery photo: ${payload.title}`);
        break;

      case 'delete_gallery_item':
        db.gallery = db.gallery.filter((g) => g.id !== payload.id);
        logAdminActivity('DELETE_GALLERY_ITEM', 'Gallery Manager', `Deleted gallery item ID: ${payload.id}`);
        break;

      // 11. Infrastructure
      case 'update_infrastructure':
        db.infrastructureItems = payload;
        logAdminActivity('UPDATE_INFRASTRUCTURE', 'Infrastructure Manager', 'Updated infrastructure complex records');
        break;

      // 12. Sustainability
      case 'update_sustainability':
        db.sustainabilityItems = payload;
        logAdminActivity('UPDATE_SUSTAINABILITY', 'Sustainability Manager', 'Updated sustainability initiatives');
        break;

      // 13. Projects
      case 'update_projects':
        db.projects = payload;
        logAdminActivity('UPDATE_PROJECTS', 'Projects Manager', 'Saved changes to landmark projects');
        break;

      case 'add_project':
        db.projects = [payload, ...(db.projects || [])];
        logAdminActivity('ADD_PROJECT', 'Projects Manager', `Added new project: ${payload.title}`);
        break;

      case 'delete_project':
        db.projects = db.projects.filter((p) => p.id !== payload.id);
        logAdminActivity('DELETE_PROJECT', 'Projects Manager', `Deleted project ID: ${payload.id}`);
        break;

      // 14. Client Partners
      case 'update_client_partners':
        db.clientPartners = payload;
        logAdminActivity('UPDATE_PARTNERS', 'Partners Manager', 'Updated 14 client partner records & volumes');
        break;

      case 'update_partner_master':
        db.partnerMasterBanner = payload.banner || db.partnerMasterBanner;
        db.partnerMetrics = payload.metrics || db.partnerMetrics;
        logAdminActivity('UPDATE_PARTNER_MASTER', 'Partners Manager', 'Updated partner master banner & metrics');
        break;

      // 15. Testimonials
      case 'update_testimonials':
        db.testimonials = payload;
        logAdminActivity('UPDATE_TESTIMONIALS', 'Testimonials Manager', 'Saved testimonials list');
        break;

      case 'add_testimonial':
        db.testimonials = [payload, ...(db.testimonials || [])];
        logAdminActivity('ADD_TESTIMONIAL', 'Testimonials Manager', `Added testimonial from: ${payload.name}`);
        break;

      case 'delete_testimonial':
        db.testimonials = db.testimonials.filter((t) => t.id !== payload.id);
        logAdminActivity('DELETE_TESTIMONIAL', 'Testimonials Manager', `Deleted testimonial ID: ${payload.id}`);
        break;

      // 16. Careers & Job Openings
      case 'update_job_openings':
        db.jobOpenings = payload;
        logAdminActivity('UPDATE_JOBS', 'Careers Manager', 'Updated job openings list');
        break;

      case 'add_job_opening':
        db.jobOpenings = [payload, ...(db.jobOpenings || [])];
        logAdminActivity('ADD_JOB', 'Careers Manager', `Posted new opening: ${payload.title}`);
        break;

      case 'delete_job_opening':
        db.jobOpenings = db.jobOpenings.filter((j) => j.id !== payload.id);
        logAdminActivity('DELETE_JOB', 'Careers Manager', `Deleted job ID: ${payload.id}`);
        break;

      case 'update_application_status':
        db.jobApplications = (db.jobApplications || []).map((app) =>
          app.id === payload.id ? { ...app, status: payload.status } : app
        );
        logAdminActivity('UPDATE_APP_STATUS', 'Careers Manager', `Application status changed to ${payload.status}`);
        break;

      case 'delete_job_application':
        db.jobApplications = (db.jobApplications || []).filter((app) => app.id !== payload.id);
        logAdminActivity('DELETE_APP', 'Careers Manager', `Deleted application ID: ${payload.id}`);
        break;

      // 17. Contact & Google Maps
      case 'update_contact_settings':
        db.contactSettings = { ...db.contactSettings, ...payload };
        logAdminActivity('UPDATE_CONTACT', 'Contact Manager', 'Updated contact details, Google Maps URL & coordinates');
        break;

      // 18. Enquiries
      case 'update_enquiry_status':
        db.enquiries = db.enquiries.map((e) =>
          e.id === payload.id ? { ...e, status: payload.status } : e
        );
        logAdminActivity('ENQUIRY_STATUS', 'Enquiry Inbox', `Enquiry ${payload.id} status set to ${payload.status}`);
        break;

      case 'delete_enquiry':
        db.enquiries = db.enquiries.filter((e) => e.id !== payload.id);
        logAdminActivity('DELETE_ENQUIRY', 'Enquiry Inbox', `Deleted enquiry ID: ${payload.id}`);
        break;

      // 19. Navigation & Header
      case 'update_navigation_items':
        db.navigationItems = payload;
        logAdminActivity('UPDATE_NAV', 'Header Manager', 'Updated navigation links and dropdown menus');
        break;

      // 20. Footer Settings
      case 'update_footer_settings':
        db.footerSettings = { ...db.footerSettings, ...payload };
        logAdminActivity('UPDATE_FOOTER', 'Footer Manager', 'Updated footer text, social links, and copyright');
        break;

      // 21. Section Settings
      case 'update_section_settings':
        db.sectionSettings = payload;
        logAdminActivity('UPDATE_SECTIONS', 'Section Manager', 'Reordered and configured section visibility');
        break;

      // 22. Reset to Defaults
      case 'reset_to_defaults':
        await saveDatabaseAsync(defaultCMSData);
        logAdminActivity('RESET_SYSTEM', 'System', 'Reset all content to factory production defaults');
        return NextResponse.json({ success: true, message: 'All data restored to factory defaults' });

      default:
        return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
    }

    await saveDatabaseAsync(db);
    return NextResponse.json({ success: true, message: 'Changes saved successfully to database' });
  } catch (err: any) {
    console.error('API admin data update error:', err);
    return NextResponse.json({ error: err.message || 'Failed to update data' }, { status: 500 });
  }
}
