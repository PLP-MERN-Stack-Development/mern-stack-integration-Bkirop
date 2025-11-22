import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">
            Welcome to our MERN Stack Blog! This is a full-stack web application built with
            MongoDB, Express.js, React, and Node.js.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>User authentication and authorization</li>
            <li>Create, read, update, and delete blog posts</li>
            <li>Comment system for posts</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Protected routes for authenticated users</li>
            <li>Password reset functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>React</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Backend</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;