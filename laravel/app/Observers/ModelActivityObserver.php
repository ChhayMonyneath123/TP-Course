<?php

namespace App\Observers;

use App\Models\ActivityLog;

class ModelActivityObserver
{
    /**
     * Handle the "created" event.
     */
    public function created(Model $model): void
    {
        ActivityLog::create([
            'model'    => get_class($model),
            'model_id' => $model->id,
            'action'   => 'created',
            'changes'  => $model->toArray(),
        ]);
    }

    /**
     * Handle the "updated" event.
     */
    public function updated(Model $model): void
    {
        ActivityLog::create([
            'model'    => get_class($model),
            'model_id' => $model->id,
            'action'   => 'updated',
            'changes'  => [
                'old' => $model->getOriginal(),
                'new' => $model->getChanges(),
            ],
        ]);
    }

    /**
     * Handle the "deleted" event.
     */
    public function deleted(Model $model): void
    {
        ActivityLog::create([
            'model'    => get_class($model),
            'model_id' => $model->id,
            'action'   => 'deleted',
            'changes'  => $model->toArray(),
        ]);
    }
}
