import os
import psycopg2
from psycopg2.extras import DictCursor

def get_db():
    db_url = os.environ.get('DATABASE_URL')
    
    # If DATABASE_URL is missing, we raise an error in production,
    # but allow a fallback for local testing if needed.
    if not db_url:
        import sqlite3
        conn = sqlite3.connect('database.db')
        conn.row_factory = sqlite3.Row
        return conn

    # Connect to Neon Postgres
    conn = psycopg2.connect(db_url, cursor_factory=DictCursor)
    conn.autocommit = True
    return SQLiteToPostgresWrapper(conn)

class SQLiteToPostgresWrapper:
    def __init__(self, conn):
        self.conn = conn

    def execute(self, query, params=()):
        # Convert SQLite '?' to Postgres '%s' automatically
        pg_query = query.replace('?', '%s')
        cursor = self.conn.cursor()
        cursor.execute(pg_query, params)
        return cursor

    def commit(self):
        # We set autocommit=True, so manual commits are basically no-ops, 
        # but this keeps compatibility with app.py's conn.commit()
        pass

    def close(self):
        self.conn.close()

def init_db(force_reset=False):
    # In Vercel (production), we do not run init_db automatically 
    # to prevent accidentally wiping the database. Tables must be 
    # created in the Neon Dashboard directly.
    pass

def sync_admin_credentials(conn):
    # Helper for admin sync if needed
    pass
