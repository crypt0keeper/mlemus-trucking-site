import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2 } from "lucide-react";

const labelCls = "text-sm font-medium text-foreground mb-1.5 block";
const selectCls =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const ContactForm = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(location.hash === "#sent");

  useEffect(() => {
    if (location.hash === "#sent") {
      setSent(true);
      document.getElementById("form-sent")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location.hash]);

  if (sent) {
    return (
      <div
        id="form-sent"
        role="status"
        className="rounded-lg border border-green-600/40 bg-green-600/10 p-6 sm:p-8 text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-2">Message Sent</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. We'll get back to you shortly. For anything urgent, call{" "}
          <a href="tel:805-815-7604" className="text-primary font-medium">805-815-7604</a>.
        </p>
        <Button
          variant="outline"
          className="font-heading uppercase tracking-wider"
          onClick={() => {
            setSent(false);
            setLoading(false);
            window.history.replaceState(null, "", "/contact");
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-5"
      onSubmit={() => setLoading(true)}
    >
      <input type="hidden" name="access_key" value="517808c4-21d8-4d06-a24b-c571c6d05fdc" />
      <input type="hidden" name="subject" value="New Quote Request - M Lemus Trucking Website" />
      <input type="hidden" name="from_name" value="M Lemus Trucking Website" />
      <input type="hidden" name="redirect" value="https://mlemustrucking.com/contact#sent" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Name *</label>
          <Input id="cf-name" required name="name" placeholder="Your name" maxLength={100} autoComplete="name" className="bg-background" />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelCls}>Company</label>
          <Input id="cf-company" name="company" placeholder="Company name" maxLength={100} autoComplete="organization" className="bg-background" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email *</label>
          <Input id="cf-email" required type="email" name="email" placeholder="you@company.com" maxLength={255} autoComplete="email" className="bg-background" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone</label>
          <Input id="cf-phone" type="tel" name="phone" placeholder="(805) 555-0123" maxLength={30} autoComplete="tel" className="bg-background" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-pickup" className={labelCls}>Pickup city</label>
          <Input id="cf-pickup" name="pickup_city" placeholder="e.g. Oxnard, CA" maxLength={100} className="bg-background" />
        </div>
        <div>
          <label htmlFor="cf-delivery" className={labelCls}>Delivery city</label>
          <Input id="cf-delivery" name="delivery_city" placeholder="e.g. Mira Loma, CA" maxLength={100} className="bg-background" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-equipment" className={labelCls}>Equipment</label>
          <select id="cf-equipment" name="equipment" defaultValue="" className={selectCls}>
            <option value="" disabled>Select one</option>
            <option>Reefer (53')</option>
            <option>Container drayage</option>
            <option>Power only</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-frequency" className={labelCls}>How often?</label>
          <select id="cf-frequency" name="frequency" defaultValue="" className={selectCls}>
            <option value="" disabled>Select one</option>
            <option>One-time load</option>
            <option>Weekly</option>
            <option>Daily / dedicated lane</option>
            <option>Seasonal</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>Message *</label>
        <Textarea id="cf-message" required name="message" placeholder="Commodity, temperature, pickup dates, anything else we should know..." rows={5} maxLength={2000} className="bg-background" />
      </div>

      <Button type="submit" disabled={loading} className="w-full sm:w-auto font-heading uppercase tracking-wider">
        <Send className="w-4 h-4 mr-2" />
        {loading ? "Sending..." : "Request a Quote"}
      </Button>
    </form>
  );
};

export default ContactForm;
