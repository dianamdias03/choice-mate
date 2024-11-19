import React, { createContext, useContext, useState, ReactNode } from "react";

interface OptionsContextType {
  options: string[];
  addOption: (option: string) => void;
  removeOptions: () => void;
}

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

export const OptionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [options, setOptions] = useState<string[]>([]);

  const addOption = (option: string) => {
    setOptions((prevOptions) => [...prevOptions, option]);
  };

  const removeOptions = () => {
    setOptions([]);
  };

  return (
    <OptionsContext.Provider value={{ options, addOption, removeOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = (): OptionsContextType => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error("useOptions must be used within an OptionsProvider");
  }
  return context;
};
