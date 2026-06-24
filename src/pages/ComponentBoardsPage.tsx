import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import {
  BarChart3,
  Box,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  CirclePlus,
  Clock3,
  DoorOpen,
  Grid3X3,
  Home,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MoreHorizontal,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Trash2,
  UserRound,
  ArrowRight,
} from "lucide-react";
import { Alert } from "../components/shared/Alert";
import { Badge, Tag } from "../components/shared/BadgeTag";
import { Button } from "../components/shared/Button";
import { SecurityCard } from "../components/shared/Card";
import { ColorSwatch } from "../components/shared/ColorSwatch";
import { DataTable, Avatar } from "../components/shared/DataDisplay";
import { DatePicker } from "../components/shared/DatePicker";
import { CheckboxField, RadioField, SelectField, TextInput } from "../components/shared/FormControls";
import { KeyConcepts } from "../components/shared/HeaderFooter";
import { IconButton } from "../components/shared/IconButton";
import { IconGrid } from "../components/shared/IconGrid";
import { KimsLogo } from "../components/shared/Logo";
import { Breadcrumbs, Pagination, SidebarNav } from "../components/shared/Navigation";
import { DropdownMenu, DropdownTrigger, ModalCard, TooltipDemo } from "../components/shared/Overlays";
import { Panel } from "../components/shared/Panel";
import { ProgressBar, Stepper } from "../components/shared/Progress";
import { FilterButton, FilterIconButton, SearchInput } from "../components/shared/SearchControls";
import { RangeTrack, ValueBubble } from "../components/shared/Sliders";
import { StatusDot, StatusPill } from "../components/shared/Status";
import { ContactDock } from "../components/shared/ContactDock";
import { SiteFooter, SiteHeader, defaultContactItems, defaultCredentialBadges } from "../components/shared/SiteChrome";
import { Accordion, Tabs } from "../components/shared/TabsAccordion";
import { SegmentedControl, ToggleSwitch } from "../components/shared/Toggle";
import { business } from "../data/seoSite";
import { footerColumns, navItems } from "./website/websiteData";

const colors = [
  { name: "Charcoal", hex: "#1E1E1E" },
  { name: "Kim's Blue", hex: "#0787F5" },
  { name: "Light", hex: "#F2F2F2" },
  { name: "Graphite", hex: "#6B6B6B" },
  { name: "Silver", hex: "#BDBDBD" },
  { name: "White", hex: "#FFFFFF" },
];

const typographyRows = [
  ["Display", "Source Serif 4 700"],
  ["Heading 1", "Source Serif 4 700 / 56px"],
  ["Heading 2", "Source Serif 4 650 / 40px"],
  ["Body Large", "Söhne / Manrope 500 / 18px"],
  ["Body Regular", "Söhne / Manrope 400 / 15px"],
  ["Metadata", "IBM Plex Mono 600 / 11px"],
];

const iconList = [
  { label: "Lock", Icon: LockKeyhole },
  { label: "Shield", Icon: ShieldCheck },
  { label: "Door", Icon: DoorOpen },
  { label: "Screen", Icon: Grid3X3 },
  { label: "Settings", Icon: Settings },
  { label: "Profile", Icon: UserRound },
  { label: "Home", Icon: Home },
  { label: "Phone", Icon: Phone },
  { label: "Mail", Icon: Mail },
  { label: "Location", Icon: MapPin },
  { label: "Calendar", Icon: CalendarDays },
  { label: "Clock", Icon: Clock3 },
  { label: "Add", Icon: CirclePlus },
  { label: "Approve", Icon: CircleCheck },
  { label: "Delete", Icon: Trash2 },
  { label: "More", Icon: MoreHorizontal },
];

const selectOptions = [
  { label: "Select an option", value: "" },
  { label: "Blinds", value: "security-doors" },
  { label: "Fly Screens", value: "screens" },
  { label: "Installation", value: "installation" },
];

const steps = [
  { label: "Step 1", status: "Complete" },
  { label: "Step 2", status: "In Progress" },
  { label: "Step 3", status: "Pending" },
  { label: "Step 4", status: "Pending" },
];

const sidebarItems = [
  { label: "Dashboard", Icon: Home },
  { label: "Products", Icon: Box },
  { label: "Orders", Icon: BriefcaseBusiness },
  { label: "Customers", Icon: UserRound },
  { label: "Reports", Icon: BarChart3 },
  { label: "Settings", Icon: Settings },
];

const tableRows = [
  { name: "Roller Blind", status: "active" as const, statusLabel: "Active", date: "May 12, 2024" },
  { name: "Fly Screen", status: "pending" as const, statusLabel: "Pending", date: "May 10, 2024" },
  { name: "Awning", status: "inactive" as const, statusLabel: "Inactive", date: "May 8, 2024" },
  { name: "Panel Glide", status: "active" as const, statusLabel: "Active", date: "May 5, 2024" },
];

export function ComponentBoardsPage() {
  const [checkboxSelected, setCheckboxSelected] = useState(true);
  const [radioValue, setRadioValue] = useState("selected");
  const [toggleOn, setToggleOn] = useState(true);
  const [toggleOff, setToggleOff] = useState(false);
  const [segment, setSegment] = useState("Option 1");
  const [activeTab, setActiveTab] = useState("Overview");
  const [tags, setTags] = useState(["Blinds", "Fly Screens", "Installation"]);
  const [visibleAlerts, setVisibleAlerts] = useState(["success", "info", "warning", "error"]);

  return (
    <main className="design-board">
      <div className="board-grid">
        <Panel number="01" title="Logo" className="panel-logo">
          <div className="logo-hero-row">
            <KimsLogo variant="full" size="hero" />
          </div>
          <div className="divider" />
          <h3 className="subhead">Logo Treatments</h3>
          <div className="logo-variants">
            <LogoVariant label="Supplied Full Logo">
              <KimsLogo variant="icon" size="sample" className="kims-logo--full-color-sample" />
            </LogoVariant>
            <LogoVariant label="Compact Placement">
              <KimsLogo variant="icon" size="sample" />
            </LogoVariant>
            <LogoVariant label="Header Placement">
              <KimsLogo variant="wordmark" size="sample" />
            </LogoVariant>
            <LogoVariant label="Single-Asset Treatment">
              <KimsLogo variant="monochrome" size="sample" />
            </LogoVariant>
          </div>
        </Panel>

        <Panel number="02" title="Color Palette" className="panel-palette">
          <div className="palette-grid">
            {colors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </Panel>

        <Panel number="03" title="Typography" className="panel-type">
          <div className="type-panel">
            <div className="type-specimen">Aa</div>
            <div className="type-copy">
              <h3>Source Serif 4 + Söhne</h3>
              <p>DISPLAY FOR PREMIUM HEADLINES</p>
              <p>Söhne for clear product copy and controls, with Manrope fallback</p>
              <p>IBM Plex Mono for labels, specs and proof points</p>
            </div>
          </div>
          <div className="type-table">
            {typographyRows.map(([label, value]) => (
              <div key={label} className="type-table__row">
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel number="04" title="Buttons" className="panel-buttons">
          <div className="button-system">
            <div className="button-column">
              <h3 className="mini-label">Primary</h3>
              <Button>Button</Button>
              <Button variant="primaryOutline">Button</Button>
            </div>
            <div className="button-column">
              <h3 className="mini-label">Secondary</h3>
              <Button variant="secondary">Button</Button>
              <Button variant="secondaryOutline">Button</Button>
            </div>
            <div className="button-column button-column--tertiary">
              <h3 className="mini-label">Tertiary</h3>
              <Button variant="tertiary">Button</Button>
            </div>
            <div className="button-column button-column--icons">
              <h3 className="mini-label">Icon Button</h3>
              <IconButton icon={<Search size={30} />} label="Search" />
              <IconButton icon={<Menu size={30} />} label="Menu" />
            </div>
            <div className="button-states">
              <h3 className="mini-label">Button States</h3>
              <div className="state-row">
                <StateSample label="Default">
                  <Button>Button</Button>
                </StateSample>
                <StateSample label="Hover">
                  <Button visualState="hover">Button</Button>
                </StateSample>
                <StateSample label="Pressed">
                  <Button visualState="pressed">Button</Button>
                </StateSample>
                <StateSample label="Disabled">
                  <Button disabled>Button</Button>
                </StateSample>
              </div>
            </div>
          </div>
        </Panel>

        <Panel number="05" title="Inputs" className="panel-inputs">
          <div className="inputs-grid">
            <div className="field-stack">
              <TextInput label="Text Input" placeholder="Enter text..." />
              <TextInput label="Focused" status="focused" placeholder="Enter text..." />
              <TextInput label="Disabled" status="disabled" placeholder="Enter text..." />
            </div>
            <div className="field-stack">
              <SelectField label="Select Dropdown" options={selectOptions} />
              <div className="choice-grid">
                <div>
                  <h3 className="mini-label">Checkbox</h3>
                  <CheckboxField
                    label="Option selected"
                    checked={checkboxSelected}
                    onChange={(event) => setCheckboxSelected(event.target.checked)}
                  />
                  <CheckboxField
                    label="Option unselected"
                    checked={!checkboxSelected}
                    onChange={() => setCheckboxSelected(false)}
                  />
                </div>
                <div>
                  <h3 className="mini-label">Radio Button</h3>
                  <RadioField
                    label="Selected"
                    name="radio-demo"
                    checked={radioValue === "selected"}
                    onChange={() => setRadioValue("selected")}
                  />
                  <RadioField
                    label="Unselected"
                    name="radio-demo"
                    checked={radioValue === "unselected"}
                    onChange={() => setRadioValue("unselected")}
                  />
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel number="06" title="Icons" className="panel-icons">
          <IconGrid icons={iconList} />
          <p className="caption">Consistent stroke and chrome finish</p>
        </Panel>

        <Panel number="07" title="Cards" className="panel-cards">
          <div className="cards-row">
            <SecurityCard title="Card Title" description="This is a short description that supports the title." />
            <SecurityCard
              title="Card Title"
              description="This is a short description that supports the title."
              variant="accent"
            />
            <SecurityCard
              title="Card Title"
              description="This is a short description that supports the title."
              variant="dark"
            />
          </div>
        </Panel>

        <Panel number="08" title="Badges & Tags" className="panel-badges">
          <div className="badges-tags">
            <div>
              <h3 className="mini-label">Badges</h3>
              <div className="badge-grid">
                <Badge variant="success">Success</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>
            <div>
              <h3 className="mini-label">Tags</h3>
              <div className="tag-grid">
                {tags.map((tag) => (
                  <Tag key={tag} onRemove={() => setTags((current) => current.filter((item) => item !== tag))}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </Panel>

        <Panel number="09" title="Progress & Stepper" className="panel-progress">
          <div className="progress-stepper">
            <div>
              <h3 className="mini-label">Progress Bar</h3>
              <ProgressBar value={60} />
            </div>
            <div>
              <h3 className="mini-label">Stepper</h3>
              <Stepper steps={steps} currentStep={2} />
            </div>
          </div>
        </Panel>

        <Panel number="10" title="Toggles & Switches" className="panel-toggles">
          <div className="toggle-layout">
            <div>
              <h3 className="mini-label">Toggle Switch</h3>
              <div className="toggle-row">
                <ToggleSwitch checked={toggleOn} label="Enable" onChange={setToggleOn} />
                <ToggleSwitch checked={toggleOff} label="Disable" onChange={setToggleOff} />
              </div>
            </div>
            <div>
              <h3 className="mini-label">Toggle Button</h3>
              <SegmentedControl
                options={["Option 1", "Option 2", "Option 3"]}
                value={segment}
                onChange={setSegment}
              />
            </div>
          </div>
        </Panel>

        <Panel number="11" title="Alerts" className="panel-alerts">
          <div className="alert-stack">
            {visibleAlerts.includes("success") ? (
              <Alert variant="success" onDismiss={() => dismissAlert("success", setVisibleAlerts)}>
                This is a success message.
              </Alert>
            ) : null}
            {visibleAlerts.includes("info") ? (
              <Alert variant="info" onDismiss={() => dismissAlert("info", setVisibleAlerts)}>
                This is an information message.
              </Alert>
            ) : null}
            {visibleAlerts.includes("warning") ? (
              <Alert variant="warning" onDismiss={() => dismissAlert("warning", setVisibleAlerts)}>
                This is a warning message.
              </Alert>
            ) : null}
            {visibleAlerts.includes("error") ? (
              <Alert variant="error" onDismiss={() => dismissAlert("error", setVisibleAlerts)}>
                This is an error message.
              </Alert>
            ) : null}
          </div>
        </Panel>
      </div>
      <AdditionalComponentsBoard activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderFooterBoard />
    </main>
  );
}

function HeaderFooterBoard() {
  return (
    <section className="header-footer-board" aria-labelledby="header-footer-title">
      <div className="header-footer-grid">
        <section className="header-desktop-section">
          <h1 id="header-footer-title">Header (Desktop)</h1>
          <p>Production header chrome used by the live Kim's Blinds website.</p>
          <div className="component-production-frame component-production-frame--header website-root">
            <SiteHeader
              nav={navItems}
              activeHref="/services"
              primaryAction={{ label: "Free Measure & Quote", href: "/contact", iconRight: <ArrowRight size={17} /> }}
              utilityActions={[{ label: business.phone, href: business.phoneHref, ariaLabel: `Call Kim's Blinds on ${business.phone}`, iconLeft: <Phone size={19} />, variant: "light" }]}
              compact
            />
          </div>
        </section>

        <section className="header-mobile-section">
          <h2>Header (Mobile)</h2>
          <div className="component-production-frame component-production-frame--mobile website-root">
            <SiteHeader
              nav={navItems}
              activeHref="/services"
              primaryAction={{ label: "Quote", href: "/contact" }}
              utilityActions={[{ label: business.phone, href: business.phoneHref, ariaLabel: `Call Kim's Blinds on ${business.phone}`, iconLeft: <Phone size={19} />, variant: "light" }]}
              compact
            />
          </div>
        </section>

        <section className="footer-desktop-section">
          <h2>Footer (Desktop)</h2>
          <div className="component-production-frame component-production-frame--footer website-root">
            <SiteFooter
              columns={footerColumns}
              summary="Family-owned blinds, awnings, shutters, curtains, fly screen and security door specialists from Oak Flats, serving the Illawarra and selected Sutherland Shire suburbs."
              contact={defaultContactItems}
              credentials={defaultCredentialBadges}
              legal={[{ label: "Privacy", href: "/privacy-policy" }, { label: "Terms", href: "/terms-of-service" }]}
            />
          </div>
        </section>

        <section className="mobile-dock-section">
          <h2>Mobile Contact Dock</h2>
          <div className="component-production-frame component-production-frame--dock website-root">
            <ContactDock forceVisible scrollThreshold={0} />
          </div>
        </section>
      </div>
      <KeyConcepts />
    </section>
  );
}

function AdditionalComponentsBoard({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) {
  return (
    <section className="additional-board" aria-labelledby="additional-components-title">
      <header className="additional-board__header">
        <h1 id="additional-components-title">Additional Shared Components</h1>
        <p>Additional UI components you may need for building consistent and scalable interfaces.</p>
      </header>

      <div className="additional-grid">
        <Panel number="" title="Navigation" className="additional-panel panel-navigation">
          <div className="blue-rule" />
          <div className="navigation-demo">
            <SidebarNav items={sidebarItems} activeLabel="Dashboard" />
            <div className="navigation-demo__right">
              <Breadcrumbs items={["Home", "Products", "Doors"]} />
              <Pagination activePage={1} />
            </div>
          </div>
        </Panel>

        <Panel number="" title="Search" className="additional-panel panel-search">
          <div className="blue-rule" />
          <div className="search-demo">
            <SearchInput placeholder="Search..." />
            <div className="search-demo__actions">
              <FilterButton count={2} />
              <FilterIconButton />
            </div>
          </div>
        </Panel>

        <Panel number="" title="Status Indicators" className="additional-panel panel-status">
          <div className="blue-rule" />
          <div className="status-demo">
            <div className="status-demo__pills">
              <StatusPill tone="active">Active</StatusPill>
              <StatusPill tone="pending">Pending</StatusPill>
              <StatusPill tone="inactive">Inactive</StatusPill>
              <StatusPill tone="archived">Archived</StatusPill>
            </div>
            <div className="status-demo__dots">
              <StatusDot tone="active" label="Active" />
              <StatusDot tone="pending" label="Pending" />
              <StatusDot tone="error" label="Error" />
              <StatusDot tone="info" label="Information" />
              <StatusDot tone="archived" label="Archived" />
            </div>
          </div>
        </Panel>

        <Panel number="" title="Dividers & Spacing" className="additional-panel panel-dividers">
          <div className="blue-rule" />
          <div className="divider-demo">
            <span className="line-solid" />
            <span className="line-dashed" />
            <span className="line-vertical" />
          </div>
        </Panel>

        <Panel number="" title="Tabs" className="additional-panel panel-tabs">
          <div className="blue-rule" />
          <Tabs
            options={["Overview", "Details", "Activity", "Settings"]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </Panel>

        <Panel number="" title="Accordion" className="additional-panel panel-accordion">
          <div className="blue-rule" />
          <Accordion items={[{ title: "Installation Guide" }, { title: "Maintenance" }]} />
        </Panel>

        <Panel number="" title="Tooltips" className="additional-panel panel-tooltips">
          <div className="blue-rule" />
          <TooltipDemo />
        </Panel>

        <Panel number="" title="Modals / Dialog" className="additional-panel panel-modal">
          <div className="blue-rule" />
          <ModalCard />
        </Panel>

        <Panel number="" title="Dropdown Menu" className="additional-panel panel-dropdown">
          <div className="blue-rule" />
          <DropdownTrigger />
          <DropdownMenu />
        </Panel>

        <Panel number="" title="Date Picker" className="additional-panel panel-date">
          <div className="blue-rule" />
          <DatePicker />
        </Panel>

        <Panel number="" title="Sliders" className="additional-panel panel-sliders">
          <div className="blue-rule" />
          <div className="slider-demo">
            <div>
              <p>Range Slider</p>
              <RangeTrack start={20} end={80} />
              <div className="slider-scale">
                <span>0</span>
                <span>100</span>
              </div>
              <div className="range-values">
                <ValueBubble value={20} left={20} />
                <ValueBubble value={80} left={80} />
              </div>
            </div>
            <div>
              <p>Single Slider</p>
              <RangeTrack start={60} />
              <div className="slider-scale">
                <span>0</span>
                <span>100</span>
              </div>
              <div className="range-values">
                <ValueBubble value={60} left={60} />
              </div>
            </div>
          </div>
        </Panel>

        <div className="additional-side-stack">
          <Panel number="" title="Data Display" className="additional-panel panel-data">
            <div className="blue-rule" />
            <DataTable rows={tableRows} />
          </Panel>

          <Panel number="" title="Avatars" className="additional-panel panel-avatars">
            <div className="blue-rule" />
            <div className="avatar-row">
              <Avatar label="Daniel" image="man" />
              <Avatar label="Sarah" image="woman" />
              <Avatar label="JD" dark />
              <Avatar label="+5" dark />
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function LogoVariant({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="logo-variant">
      <div>{children}</div>
      <span>{label}</span>
    </div>
  );
}

function StateSample({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="state-sample">
      <span>{label}</span>
      {children}
    </div>
  );
}

function dismissAlert(
  alert: string,
  setVisibleAlerts: Dispatch<SetStateAction<string[]>>,
) {
  setVisibleAlerts((current) => current.filter((item) => item !== alert));
}
