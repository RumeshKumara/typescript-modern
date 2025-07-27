interface CustomConfig {
    id: number;
    name: string;
    enabled: boolean;
}

class CustomManager {
    private config: CustomConfig;

    constructor(config: CustomConfig) {
        this.config = config;
    }

    getConfig(): CustomConfig {
        return this.config;
    }

    updateConfig(newConfig: Partial<CustomConfig>): void {
        this.config = { ...this.config, ...newConfig };
    }

    isEnabled(): boolean {
        return this.config.enabled;
    }
}

// Example usage
const config: CustomConfig = {
    id: 1,
    name: "Default",
    enabled: true
};

const manager = new CustomManager(config);
