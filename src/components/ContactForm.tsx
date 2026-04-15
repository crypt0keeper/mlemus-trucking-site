import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-5"
      onSubmit={() => setLoading(true)}
    >
      <input
        type="hidden"
        name="access_key"
        value="517808c4-21d8-4d06-a24b-c571c6d05fdc"
      />

      <input
        type="hidden"
        name="subject"
        value="New Lead from M Lemus Trucking Website"
      />

      <input
        type="hidden"
        name="from_name"
        value="M Lemus Trucking Website"
      />

      <input
        type="hidden"
        name="redirect"
        value="https://mlemustrucking.com/contact#sent"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Name *
          </label>
          <Input
            required
            name="name"
            placeholder="Your name"
            maxLength={100}
            className="bg-background"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Company
          </label>
          <Input
            name="company"
            placeholder="Company name"
            maxLength={100}
            className="bg-background"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">
          Email *
        </label>
        <Input
          required
          type="email"
          name="email"
          placeholder="you@company.com"
          maxLength={255}
          className="bg-background"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">
          Message *
        </label>
        <Textarea
          required
          name="message"
          placeholder="Tell us about your freight needs..."
          rows={5}
          maxLength={2000}
          className="bg-background"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto font-heading uppercase tracking-wider"
      >
        <Send className="w-4 h-4 mr-2" />
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
