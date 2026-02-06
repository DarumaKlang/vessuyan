'use client'

import { useState, useEffect } from 'react'
import {
    Box,
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Select,
    MenuItem,
    TextField,
    CircularProgress,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Chip
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface UserManagement {
    id: string
    email: string
    fullName: string
    createdAt: string
    tier: string
    status: string
    endDate: string | null
}

export default function AdminUsersPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [users, setUsers] = useState<UserManagement[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Edit Dialog State
    const [open, setOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<UserManagement | null>(null)
    const [newTier, setNewTier] = useState('')
    const [newEndDate, setNewEndDate] = useState('')
    const [updating, setUpdating] = useState(false)

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin')
        } else if (session?.user?.email !== 'admin@vessuyan.com') {
            router.push('/dashboard')
        } else if (status === 'authenticated') {
            fetchUsers()
        }
    }, [status, session, router])

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const res = await fetch('/api/admin/users')
            if (!res.ok) throw new Error('Failed to fetch users')
            const data = await res.json()
            setUsers(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    const handleEditClick = (user: UserManagement) => {
        setSelectedUser(user)
        setNewTier(user.tier)
        setNewEndDate(user.endDate ? new Date(user.endDate).toISOString().split('T')[0] : '')
        setOpen(true)
    }

    const handleUpdate = async () => {
        if (!selectedUser) return

        try {
            setUpdating(true)
            const res = await fetch('/api/admin/users/update-tier', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: selectedUser.id,
                    tier: newTier,
                    endDate: newEndDate || null
                })
            })

            if (!res.ok) throw new Error('Update failed')

            await fetchUsers()
            setOpen(false)
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Update failed')
        } finally {
            setUpdating(false)
        }
    }

    if (loading) return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#0a0a0c">
            <CircularProgress color="secondary" />
        </Box>
    )

    return (
        <Box minHeight="100vh" bgcolor="#0a0a0c" pt={4} pb={8}>
            <Container maxWidth="lg">
                <Typography variant="h4" color="white" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                    User Management
                </Typography>

                {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}

                <TableContainer component={Paper} sx={{ bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', color: 'white' }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: 'rgba(156, 39, 176, 0.1)' }}>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>User</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Membership Tier</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Expiration Date</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} hover sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' } }}>
                                    <TableCell sx={{ color: 'white' }}>{user.fullName}</TableCell>
                                    <TableCell sx={{ color: 'white' }}>{user.email}</TableCell>
                                    <TableCell sx={{ color: 'white' }}>
                                        <Chip
                                            label={user.tier}
                                            color={user.tier === 'PREMIUM' ? 'secondary' : (user.tier === 'FREE_MEMBER' ? 'info' : 'default')}
                                            variant="outlined"
                                            size="small"
                                            sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ color: 'white' }}>
                                        {user.endDate ? new Date(user.endDate).toLocaleDateString('th-TH') : 'None'}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white' }}>
                                        <IconButton size="small" onClick={() => handleEditClick(user)} sx={{ color: '#9c27b0' }}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Edit Dialog */}
                <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { bgcolor: '#1a1a1e', color: 'white', minWidth: 400 } }}>
                    <DialogTitle sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Edit Membership: {selectedUser?.fullName}</DialogTitle>
                    <DialogContent sx={{ mt: 2 }}>
                        <Box display="flex" flexDirection="column" gap={3}>
                            <Box>
                                <Typography variant="body2" color="rgba(255,255,255,0.7)" gutterBottom>Membership Tier</Typography>
                                <Select
                                    fullWidth
                                    value={newTier}
                                    onChange={(e) => setNewTier(e.target.value)}
                                    sx={{ color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' } }}
                                >
                                    <MenuItem value="NON_MEMBER">NON_MEMBER</MenuItem>
                                    <MenuItem value="FREE_MEMBER">FREE_MEMBER</MenuItem>
                                    <MenuItem value="PREMIUM">PREMIUM</MenuItem>
                                </Select>
                            </Box>

                            <Box>
                                <Typography variant="body2" color="rgba(255,255,255,0.7)" gutterBottom>Expiration Date (Optional)</Typography>
                                <TextField
                                    fullWidth
                                    type="date"
                                    value={newEndDate}
                                    onChange={(e) => setNewEndDate(e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                    sx={{
                                        input: { color: 'white' },
                                        '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }
                                    }}
                                />
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <Button onClick={() => setOpen(false)} sx={{ color: 'rgba(255,255,255,0.7)' }}>Cancel</Button>
                        <Button
                            onClick={handleUpdate}
                            variant="contained"
                            color="secondary"
                            disabled={updating}
                            sx={{ borderRadius: 2, px: 4 }}
                        >
                            {updating ? 'Updating...' : 'Save Changes'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    )
}
