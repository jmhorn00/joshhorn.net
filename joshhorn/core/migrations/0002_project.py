from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('tech_stack', models.CharField(blank=True, help_text='Comma-separated list of technologies (e.g. Python, Django, PostgreSQL)', max_length=300)),
                ('live_url', models.URLField(blank=True)),
                ('github_url', models.URLField(blank=True)),
                ('is_featured', models.BooleanField(default=False)),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'ordering': ['order', 'title'],
            },
        ),
    ]
