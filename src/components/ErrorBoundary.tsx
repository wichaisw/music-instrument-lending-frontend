import React, { Component, ErrorInfo, ReactNode } from "react";
import Layout from './Layout';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <h1>Unexpected Error Occurred</h1>
        </Layout>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;