const languageResources = {
    zh: {
        pageTitles: {
            home: 'SAP认证考试模拟系统',
            exam: 'SAP认证考试模拟系统 - 考试界面',
            questionBank: 'SAP认证考试模拟系统 - 题库管理'
        },
        common: {
            backToHome: '返回主页',
            save: '保存',
            cancel: '取消',
            confirm: '确认',
            submit: '提交',
            reset: '重置',
            delete: '删除',
            add: '添加',
            edit: '编辑',
            clear: '清空',
            export: '导出',
            import: '导入',
            start: '开始',
            previous: '上一题',
            next: '下一题'
        },
        homePage: {
            headerTitle: 'SAP认证考试模拟系统',
            examStatus: {
                message: '您有未完成的考试！请继续完成。',
                continueButton: '继续考试'
            },
            startExam: {
                title: '开始考试',
                description: '进入考试界面，开始您的模拟考试之旅。系统将随机抽取题库中的题目进行测试。',
                button: '开始考试'
            },
            questionBank: {
                title: '题库管理',
                description: '管理您的考试题库，添加、编辑、删除题目，或者导入导出题库数据。',
                button: '题库管理'
            },
            footer: '© 2025 SAP认证考试模拟系统. 保留所有权利.'
        },
        examPage: {
            answerSheet: '答题卡',
            timer: '考试剩余时间:',
            statusLegend: {
                unanswered: '未答',
                answered: '已答',
                marked: '已标记',
                current: '当前',
                multipleChoice: '多选题',
                correct: '正确',
                incorrect: '错误'
            },
            questionHeader: '题目 <span>{{ currentIndex + 1 }}</span> / 共 <span>{{ totalCount }}</span> 题',
            noQuestions: '请先在题库中添加题目并开始考试',
            feedback: {
                correct: '正确!',
                incorrect: '错误',
                correctMessage: '您的答案正确。',
                incorrectMessage: '您的答案错误。',
                yourAnswer: '您的答案:',
                correctAnswer: '正确答案:'
            },
            actionButtons: {
                markCurrent: '标记当前',
                resetExam: '重置考试',
                submitExam: '提交考试'
            },
            navButtons: {
                confirmAnswer: '确认答案',
                retakeExam: '重新考试'
            },
            modals: {
                submission: {
                    title: '确认提交?',
                    message: '提交后您将无法修改答案。请确认是否已完成所有题目。',
                    unanswered: '未答题目:',
                    cancel: '取消',
                    confirm: '确认提交'
                },
                results: {
                    title: '考试结果',
                    total: '总题目数:',
                    correct: '正确:',
                    incorrect: '错误:',
                    unanswered: '未答:',
                    score: '得分:',
                    confirm: '确认',
                    backToQuestionBank: '返回题库'
                },
                reset: {
                    title: '重置考试?',
                    message: '您确定要重置考试吗? 所有答案将被清除。',
                    cancel: '取消',
                    confirm: '确认重置'
                }
            }
        },
        questionBankPage: {
            headerTitle: '题库管理',
            importExport: {
                export: '导出题库',
                import: '导入题库',
                clear: '清空所有题目',
                startExam: '开始考试'
            },
            addQuestion: '添加新题目',
            questionType: '题目类型',
            questionContent: '题目内容',
            options: '选项',
            correctAnswer: '正确答案 (多选题用逗号分隔，如 A,B,C)',
            correctAnswerPlaceholder: '例如: A 或 A,B,C',
            addedQuestions: '已添加题目 (<span id="questionCount">{count}</span>)',
            noQuestions: '暂无题目，请添加题目。',
            questionTypes: {
                single: '单选题',
                multiple: '多选题'
            },
            optionPlaceholder: '选项 {{ label }} 内容',
            addOption: '添加选项',
            editQuestion: '编辑题目',
            saveChanges: '保存修改',
            warnings: {
                examInProgress: '考试正在进行中，无法访问题库管理页面！'
            }
        },
        languageSwitch: {
            label: '选择语言',
            zh: '中文',
            en: 'English (US)'
        }
    },
    en: {
        pageTitles: {
            home: 'SAP Certification Exam Simulation System',
            exam: 'SAP Certification Exam Simulation System - Exam Interface',
            questionBank: 'SAP Certification Exam Simulation System - Question Bank Management'
        },
        common: {
            backToHome: 'Back to Home',
            save: 'Save',
            cancel: 'Cancel',
            confirm: 'Confirm',
            submit: 'Submit',
            reset: 'Reset',
            delete: 'Delete',
            add: 'Add',
            edit: 'Edit',
            clear: 'Clear',
            export: 'Export',
            import: 'Import',
            start: 'Start',
            previous: 'Previous',
            next: 'Next'
        },
        homePage: {
            headerTitle: 'SAP Certification Exam Simulation System',
            examStatus: {
                message: 'You have an unfinished exam! Please continue.',
                continueButton: 'Continue Exam'
            },
            startExam: {
                title: 'Start Exam',
                description: 'Enter the exam interface and begin your simulation exam journey. The system will randomly select questions from the question bank for testing.',
                button: 'Start Exam'
            },
            questionBank: {
                title: 'Question Bank Management',
                description: 'Manage your exam question bank, add, edit, delete questions, or import/export question bank data.',
                button: 'Question Bank Management'
            },
            footer: '© 2025 SAP Certification Exam Simulation System. All rights reserved.'
        },
        examPage: {
            answerSheet: 'Answer Sheet',
            timer: 'Exam remaining time:',
            statusLegend: {
                unanswered: 'Unanswered',
                answered: 'Answered',
                marked: 'Marked',
                current: 'Current',
                multipleChoice: 'Multiple Choice',
                correct: 'Correct',
                incorrect: 'Incorrect'
            },
            questionHeader: 'Question <span>{{ currentIndex + 1 }}</span> / Total <span>{{ totalCount }}</span> questions',
            noQuestions: 'Please add questions in the question bank first and start the exam',
            feedback: {
                correct: 'Correct!',
                incorrect: 'Incorrect',
                correctMessage: 'Your answer is correct.',
                incorrectMessage: 'Your answer is incorrect.',
                yourAnswer: 'Your answer:',
                correctAnswer: 'Correct answer:'
            },
            actionButtons: {
                markCurrent: 'Mark Current',
                resetExam: 'Reset Exam',
                submitExam: 'Submit Exam'
            },
            navButtons: {
                confirmAnswer: 'Confirm Answer',
                retakeExam: 'Retake Exam'
            },
            modals: {
                submission: {
                    title: 'Confirm Submission?',
                    message: 'You will not be able to modify your answers after submission. Please confirm if you have completed all questions.',
                    unanswered: 'Unanswered questions:',
                    cancel: 'Cancel',
                    confirm: 'Confirm Submission'
                },
                results: {
                    title: 'Exam Results',
                    total: 'Total questions:',
                    correct: 'Correct:',
                    incorrect: 'Incorrect:',
                    unanswered: 'Unanswered:',
                    score: 'Score:',
                    confirm: 'Confirm',
                    backToQuestionBank: 'Back to Question Bank'
                },
                reset: {
                    title: 'Reset Exam?',
                    message: 'Are you sure you want to reset the exam? All your answers will be cleared.',
                    cancel: 'Cancel',
                    confirm: 'Confirm Reset'
                }
            }
        },
        questionBankPage: {
            headerTitle: 'Question Bank Management',
            importExport: {
                export: 'Export Question Bank',
                import: 'Import Question Bank',
                clear: 'Clear All Questions',
                startExam: 'Start Exam'
            },
            addQuestion: 'Add New Question',
            questionType: 'Question Type',
            questionContent: 'Question Content',
            options: 'Options',
            correctAnswer: 'Correct Answer (For multiple choice, separate with commas, e.g. A,B,C)',
            correctAnswerPlaceholder: 'e.g.: A or A,B,C',
            addedQuestions: 'Added Questions (<span id="questionCount">{count}</span>)',
            noQuestions: 'No questions yet. Please add questions.',
            questionTypes: {
                single: 'Single Choice',
                multiple: 'Multiple Choice'
            },
            optionPlaceholder: 'Option {{ label }} content',
            addOption: 'Add Option',
            editQuestion: 'Edit Question',
            saveChanges: 'Save Changes',
            warnings: {
                examInProgress: 'Exam in progress! Cannot access question bank management page!'
            }
        },
        languageSwitch: {
            label: 'Select Language',
            zh: 'Chinese',
            en: 'English (US)'
        }
    }
};
