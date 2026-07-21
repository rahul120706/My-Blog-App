import { Injectable, signal, computed } from '@angular/core';

export interface Topic {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LearningProgressService {
  private topicsSignal = signal<Topic[]>([
    { id: 'attr-dir', name: 'Custom Attribute Directives', category: 'Directives', completed: true },
    { id: 'struct-dir', name: 'Custom Structural Directives', category: 'Directives', completed: false },
    { id: 'forms', name: 'Reactive Forms Demo', category: 'Forms', completed: false }
  ]);

  // Track the active selected topic ID
  selectedTopicId = signal<string>('attr-dir');

  topics = this.topicsSignal.asReadonly();

  progressPercentage = computed(() => {
    const list = this.topicsSignal();
    if (list.length === 0) return 0;
    return Math.round((list.filter(t => t.completed).length / list.length) * 100);
  });

  // Action 1: Select a topic to view its work
  selectTopic(id: string) {
    this.selectedTopicId.set(id);
  }

  // Action 2: Mark it complete
  toggleTopicComplete(id: string, event: Event) {
    event.stopPropagation(); // Prevents selection switch when clicking just the checkbox icon
    this.topicsSignal.update(list => 
      list.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
}