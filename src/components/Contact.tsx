import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <a href="tel:551-227-1149" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={20} />
                <span>551-227-1149</span>
              </a>
              <a href="mailto:anurag.kannepalli@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                <span>anurag.kannepalli@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/venkatasaianurag-kannepalli" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xldjpzbp"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;